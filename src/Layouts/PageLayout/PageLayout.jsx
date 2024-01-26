import { Box, Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";

// instead of adding the Sidebar component to every page, we can add it only once to the PageLayout component and wrap the children with it. This way, we can have a sidebar on every page except the AuthPage.

const PageLayout = ({ children }) => {
    //children are the child pages in App.jsx
	const { pathname } = useLocation();

	return (
		<Flex>

			{pathname !== "/auth" ? (
                <Box w={{ base: "70px", md: "240px" }}>
                    <Sidebar/>
                </Box>
                    ): null}

			{/* the page content on the right */}
            {/* Need to pass those as props whenever called */}
			<Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }} mx={"auto"}>
				{children}
			</Box>
		</Flex>
	);
};

export default PageLayout;