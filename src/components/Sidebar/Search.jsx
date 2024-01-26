import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { SearchLogo } from  "/src/assests/constants.jsx";

const Search = () => {
	return (
		<>
			<Tooltip
				hasArrow
				label={"Search"}
				placement='right'
				ml={1}
				openDelay={500}
				// Show tootip only on small screens where there is no text
				display={{ base: "block", md: "none" }}
			>
				<Flex
					alignItems={"center"}
					gap={4}
					_hover={{ bg: "whiteAlpha.400" }}
					borderRadius={6}
					p={2}
					w={{ base: 10, md: "full" }}
					justifyContent={{ base: "center", md: "flex-start" }}
				>
					<SearchLogo />
					<Box display={{ base: "none", md: "block" }}>Search</Box>
				</Flex>
			</Tooltip>
		</>
	);
};

export default Search;
