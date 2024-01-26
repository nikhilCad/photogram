import { Container, Flex, VStack, Box, Image } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

export const AuthPage = () => {
    return (
        <Flex minH={"100vh"} justifyCOntent={"center"} alignItems={"center"} px={4}>
        {/* Like a flexbox, a container, its like horizontal grouping*/}
            <Container maxW = {"container.md"} padding={0}>
                <Flex justifyContent={"center"} alignItems={"center"} gap={20}>
                    {/* Small base screens have nothing, medium+ screens have a block */}
                    <Box display={{base:"none", md:"block"}}>
                        <Image src="/auth.png" h={650} alt="Phone img"/>
                    </Box>

                    {/* Vertical box thing */}
                    <VStack spacing={4} align={"stretch"}>
                        
                        <AuthForm/>

                        <Box textAlign={"center"}>Get the app</Box>

                        <Flex gap={5} justifyContent={"centre"}>
                            <Image src="/playstore.png" h={"10"} alt={"PlayStore Logo"}/>
                            <Image src="/microsoft.png" h={"10"} alt={"Micorsoft Store Logo"}/>
                        </Flex>

                    </VStack>
                </Flex>
                
            </Container>
        </Flex>
    )
}

export default AuthPage;

