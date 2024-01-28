import { create } from "zustand";

//Stores all of our global states

const useAuthStore = create((set) => ({
	user: JSON.parse(localStorage.getItem("user-info")),//take login info from local storage
	login: (user) => set({ user }),
	logout: () => set({ user: null }),
	setUser: (user) => set({ user }),
}));

export default useAuthStore;