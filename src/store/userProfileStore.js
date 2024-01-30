import { create } from "zustand";

const useUserProfileStore = create((set) => ({
    //creates a zustand state
	userProfile: null,
	setUserProfile: (userProfile) => set({ userProfile }),
	//update the number of posts in the profile page
	addPost: (post) =>
		set((state) => ({
			userProfile: { ...state.userProfile, posts: [post.id, ...state.userProfile.posts] },
		})),
	deletePost: (postId) =>
		set((state) => ({
			userProfile: {
				...state.userProfile,
				posts: state.userProfile.posts.filter((id) => id !== postId),
			},
		})),
}));

export default useUserProfileStore;