import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import ecklImage from "../Assets/Eckl.jpg";
import { Tile } from "../Components/Landing/Tile";
import { TopBar } from "../Components/TopBar/TopBar";

export const Landing = () => {
    return (
        <Box h={"100vh"} minH={"100vh"} w={"100vw"} minW={"100vw"}>
            <Flex
                w={"100%"}
                h={"inherit"}
                minH={350}
                minW={340}
                flexDirection={"column"}
                alignItems={"center"}
                background={`linear-gradient(rgba(255,255,255,.25), rgba(255,255,255,.25)), url(${ecklImage})`}
                bgSize={"cover"}
            >
                <TopBar />
                <SimpleGrid columns={6} spacing={2} w="100%" h="100%">
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </SimpleGrid>
            </Flex>
        </Box>
    );
};
