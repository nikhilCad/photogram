import { Flex, Image, Text } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../firebase/firebase";
import useShowToast from "../../hooks/useShowToast";
import useAuthStore from "../../store/authStore";
import { doc, getDoc, setDoc } from "firebase/firestore";

const GoogleAuth = ({ prefix }) => {

	//From react-firebase-hooks docs
	//can use in both sign in and login
	const [signInWithGoogle, error] = useSignInWithGoogle(auth);
	const showToast = useShowToast();
	const loginUser = useAuthStore((state) => state.login);

	const handleGoogleAuth = async () => {
		try {
			const newUser = await signInWithGoogle();
			if (!newUser && error) {
				showToast("Error", error.message, "error");
				return;
			}

			//check if user exists from the database
			const userRef = doc(firestore, "users", newUser.user.uid);
			const userSnap = await getDoc(userRef);

			if (userSnap.exists()) {
				// login
				const userDoc = userSnap.data();
				localStorage.setItem("user-info", JSON.stringify(userDoc));
				loginUser(userDoc);
			} else {
				// signup
				const userDoc = {
					uid: newUser.user.uid,
					email: newUser.user.email,
					//just create the username from the email lol
					//how to make sure this is unique???
					//note that uid is always unique
					username: newUser.user.email.split("@")[0],
					fullName: newUser.user.displayName,
					bio: "",
					//photourl is inbuilt
					profilePicURL: newUser.user.photoURL,
					followers: [],
					following: [],
					posts: [],
					createdAt: Date.now(),
				};
				await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
				localStorage.setItem("user-info", JSON.stringify(userDoc));
				loginUser(userDoc);
			}
		} catch (error) {
			showToast("Error", error.message, "error");
		}
	};

	return (
		<Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"} onClick={handleGoogleAuth}>
        {/* <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}> */}
			<Image src='/google.png' w={5} alt='Google logo' />
			<Text mx='2' color={"blue.500"}>
				{prefix} with Google
			</Text>
		</Flex>
	);
};

export default GoogleAuth;