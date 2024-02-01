import { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import useUserProfileStore from "../store/userProfileStore";
import useShowToast from "./useShowToast";
import { firestore } from "../firebase/firebase";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

const useFollowUser = (userId) => {
    //are we following the user with above userid?

    // will do async operations so using these states
	const [isUpdating, setIsUpdating] = useState(false);
	const [isFollowing, setIsFollowing] = useState(false);

	const authUser = useAuthStore((state) => state.user);
	const setAuthUser = useAuthStore((state) => state.setUser);

	const { userProfile, setUserProfile } = useUserProfileStore();
	const showToast = useShowToast();

	const handleFollowUser = async () => {
		setIsUpdating(true);
		try {
            //to update "followers" of one user and "following" of another user

			const currentUserRef = doc(firestore, "users", authUser.uid);
			const userToFollowOrUnfollowRef = doc(firestore, "users", userId);
			await updateDoc(currentUserRef, {
				following: isFollowing ? arrayRemove(userId) : arrayUnion(userId),
			});

			await updateDoc(userToFollowOrUnfollowRef, {
                //if already following remove, else follow
				followers: isFollowing ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid),
			});

			if (isFollowing) {
				// unfollow
				setAuthUser({//for global state, will update the followers count immediately
					...authUser,
					following: authUser.following.filter((uid) => uid !== userId),
				});
				if (userProfile)
					setUserProfile({//another state only for profile page, both use zustand
						...userProfile,
						followers: userProfile.followers.filter((uid) => uid !== authUser.uid),
					});

				localStorage.setItem(
					"user-info",
					JSON.stringify({
						...authUser,
						following: authUser.following.filter((uid) => uid !== userId),
					})
				);
				setIsFollowing(false);
			} else {
				// follow
				setAuthUser({
					...authUser,
					following: [...authUser.following, userId],
				});

				if (userProfile)
					setUserProfile({
						...userProfile,
						followers: [...userProfile.followers, authUser.uid],
					});
                
                //update local storage with this data
				localStorage.setItem(
					"user-info",
					JSON.stringify({
						...authUser,
						following: [...authUser.following, userId],
					})
				);
				setIsFollowing(true);
			}
		} catch (error) {
            //firebase gives us this error
			showToast("Error", error.message, "error");
		} finally {
            //only set false after above done
			setIsUpdating(false);
		}
	};

	useEffect(() => {
		if (authUser) {
            //is logged in user following user with userid parameter?
			const isFollowing = authUser.following.includes(userId);
			setIsFollowing(isFollowing);
		}
    //run whenever authuser or userId changes
	}, [authUser, userId]);

	return { isUpdating, isFollowing, handleFollowUser };
};

export default useFollowUser;