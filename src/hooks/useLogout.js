import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useShowToast from "./useShowToast";
// import useAuthStore from "../store/authStore";

const useLogout = () => {
    //useSignOut is from the package firebase-hooks
	const [signOut, isLoggingOut, error] = useSignOut(auth);
	const showToast = useShowToast();
	// const logoutUser = useAuthStore((state) => state.logout);

	const handleLogout = async () => {
		try {
			await signOut();
            //tell application the user has been logged out
			localStorage.removeItem("user-info");
			// logoutUser();
		} catch (error) {
			showToast("Error", error.message, "error");
		}
	};

	return { handleLogout, isLoggingOut, error };
};

export default useLogout;