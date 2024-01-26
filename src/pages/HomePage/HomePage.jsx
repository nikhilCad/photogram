import { Box, Button, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

//HomePage is the place where we have tje feeds and stuff like that after login
//We import the sidebar separately in a component

export const HomePage = () => {
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
                
        </Box>
    )
}

export default HomePage;
