import { Box, Flex, Spinner } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import Navbar from "/src/components/Navbar/Navbar.jsx";

// instead of adding the Sidebar component to every page, we can add it only 
//once to the PageLayout component and wrap the children with it. This way, we can 
//have a sidebar on every page except the AuthPage.
//We added this logic in App.jsx itself

const PageLayout = ({ children }) => {
	const { pathname } = useLocation();
	//useAuthState is built in function to check if user is logged in or not
	//user = null if not logged in
	//this also means logged out user can see someone's profile, but without
	//sidebar rendering
	const [user, loading] = useAuthState(auth);
	const canRenderSidebar = pathname !== "/auth" && user;
	//Show Navbar asking user to Log In
	const canRenderNavbar = !user && !loading && pathname !== "/auth";

	//show loading spinner, spinner just loading circle
	const checkingUserIsAuth = !user && loading;
	if (checkingUserIsAuth) return <PageLayoutSpinner />;

	return (
		<Flex flexDir={canRenderNavbar ? "column" : "row"}>
			{/* sidebar on the left */}
			{canRenderSidebar ? (
				<Box w={{ base: "70px", md: "240px" }}>
					<Sidebar />
				</Box>
			) : null}
			{/* Navbar */}
			{canRenderNavbar ? <Navbar /> : null}
			{/* the page content on the right */}
			<Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }} mx={"auto"}>
				{children}
			</Box>
		</Flex>
	);
};

export default PageLayout;

const PageLayoutSpinner = () => {
	return (
		<Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
			<Spinner size='xl' />
		</Flex>
	);
};