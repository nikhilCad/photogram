import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";

const useSignUpWithEmailAndPassword = () => {
    // the package itself gives us all this info
	const [createUserWithEmailAndPassword, , loading, error] = useCreateUserWithEmailAndPassword(auth);

	const showToast = useShowToast();

	//give us the login function of the state
	const loginUser = useAuthStore((state) => state.login);

	// its async as signup involved
    const signup = async (inputs) => {

        //Even before trying to signup check this
		if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullName) {
			showToast("Error", "Please fill all the fields", "error");
			return;
		}

		//from firebase docs
		const usersRef = collection(firestore, "users");
		const q = query(usersRef, where("username", "==", inputs.username));
		const querySnapshot = await getDocs(q);

		//if user does already exists, avoid duplicate entires in firebase
		if (!querySnapshot.empty) {
			showToast("Error", "Username already exists", "error");
			return;
		}

		try {
			//async function can use await, wait till info fetched, built in function
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
			if (!newUser && error) {
				showToast("Error", error.message, "error");
				return;
			}
			if (newUser) {
                //now user has been created in auth
                //also add user to our database of profiles with followers and everything
				const userDoc = {
					uid: newUser.user.uid,
					email: inputs.email,
					username: inputs.username,
					fullName: inputs.fullName,
					bio: "",
					profilePicURL: "",
					followers: [],
					following: [],
					posts: [],
					createdAt: Date.now(),//member since
				};

                //add user to firestore document
                //this collection's name is "users"
				await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
                //for login of particular user having this account
				localStorage.setItem("user-info", JSON.stringify(userDoc));
				//update the state to current login info
				loginUser(userDoc);
			}
		} catch (error) {
			showToast("Error", error.message, "error");
		}
	};

	//also returns if its loading
    return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword;