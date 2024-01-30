import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore";

const useGetUserProfileByUsername = (username) => {
	const [isLoading, setIsLoading] = useState(true);
	const showToast = useShowToast();
	const { userProfile, setUserProfile } = useUserProfileStore();

	//a query from firestore
    useEffect(() => {
		const getUserProfile = async () => {
			setIsLoading(true);
			try {
                //from firebase docs on "query"
                //query is 'get from users collection where username = this.username
				const q = query(collection(firestore, "users"), where("username", "==", username));
				const querySnapshot = await getDocs(q);

				//results not found
                if (querySnapshot.empty) return setUserProfile(null);

				let userDoc;
				querySnapshot.forEach((doc) => {
					userDoc = doc.data();
				});

				//just update now
                setUserProfile(userDoc);
				//console.log(userDoc);
			} catch (error) {
				showToast("Error", error.message, "error");
			} finally {
				setIsLoading(false);
			}
		};

		getUserProfile();
    //call this AFTER below are changed
	}, [setUserProfile, username, showToast]);
    //we used callback in showToast to prevent infinite loop here

	return { isLoading, userProfile };
};

export default useGetUserProfileByUsername;