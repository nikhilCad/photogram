import { Box, Flex, Link, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { InstagramLogo, InstagramMobileLogo } from "/src/assests/constants.jsx";

const Sidebar = () => {
	return (
		<Box
			height={"100vh"}
			borderRight={"1px solid"}
			borderColor={"whiteAlpha.300"}
			py={8}
			position={"sticky"}
			top={0}
			left={0}
			px={{ base: 2, md: 4 }}
		>
			<Flex direction={"column"} gap={10} w='full' height={"full"}>
				<Link to={"/"} as={RouterLink} pl={2} display={{ base: "none", md: "block" }} cursor='pointer'>
					{/* <InstagramLogo /> */}
					{/* <InstagramMobileLogo /> */}
					<Image src="/logoWhite.png" h={16} cursor={"pointer"} alt="Photogram"/>
				</Link>
				<Link
					to={"/"}
					as={RouterLink}
					p={2}
					display={{ base: "block", md: "none" }}
					borderRadius={6}
					_hover={{
						bg: "whiteAlpha.200",
					}}
					w={10}
					cursor='pointer'
				>
					<InstagramMobileLogo />
				</Link>
			</Flex>
		</Box>
	);
};

export default Sidebar;