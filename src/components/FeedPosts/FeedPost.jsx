import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

const FeedPost = ({ post }) => {
	// const { userProfile } = useGetUserProfileById(post.createdBy);

	return (
		<>
			<PostHeader post={post} creatorProfile={"userProfile"} />
			<Box my={2} borderRadius={4} overflow={"hidden"}>
				<Image src={"public/img2.png"} alt={"FEED POST IMG"} />
			</Box>
			<PostFooter post={post} creatorProfile={"userProfile"}/>
		</>
	);
};

export default FeedPost;