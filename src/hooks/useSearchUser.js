import { useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useSearchUser = () => {

	const [isLoading, setIsLoading] = useState(false);

    //the user to fetch
	const [user, setUser] = useState(null);
	const showToast = useShowToast();

	const getUserProfile = async (username) => {

		setIsLoading(true);
		setUser(null);
		try {
			//query to firebase db, with field username
            const q = query(collection(firestore, "users"), where("username", "==", username));

			const querySnapshot = await getDocs(q);
			if (querySnapshot.empty) return showToast("Error", "User not found", "error");

			//return all users from the query in user variable
            querySnapshot.forEach((doc) => {
				setUser(doc.data());
			});
		} catch (error) {
			showToast("Error", error.message, "error");
            //as error state set user ot null
			setUser(null);
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, getUserProfile, user, setUser };
};

export default useSearchUser;