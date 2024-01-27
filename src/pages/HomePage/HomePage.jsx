import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

//HomePage is the place where we have tje feeds and stuff like that after login
//We import the sidebar separately in a component

export const HomePage = () => {
    return (
		// lg means large
        <Container maxW={"container.lg"}>
			<Flex gap={20}>
				<Box flex={2} py={10}>
					<FeedPosts />
				</Box>
				{/* dont show suggested users on small screen */}
				<Box flex={3} mr={20} display={{ base: "none", lg: "block" }} maxW={"300px"}>
					<SuggestedUsers />
				</Box>
			</Flex>
		</Container>
    )
}

export default HomePage;
