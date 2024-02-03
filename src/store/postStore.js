import { create } from "zustand";

//shows posts on the profile page
//increase the number of posts the url has
//also increases the counter
//its just a state, firebase connected separately
//in createPost.jsx in useCreatePost hook
//within that file

//posts added in userProfileStore.js
const usePostStore = create((set) => ({
	posts: [],
	createPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
	deletePost: (id) => set((state) => ({ posts: state.posts.filter((post) => post.id !== id) })),
	setPosts: (posts) => set({ posts }),
	addComment: (postId, comment) =>
		set((state) => ({
			//object to update the posts
			posts: state.posts.map((post) => {
				//find required post
				if (post.id === postId) {
					return {
						//update the state
						...post,
						//comment at end to show at bottom of comment section
						comments: [...post.comments, comment],
					};
				}
				return post;
			}),
		})),
}));

export default usePostStore;