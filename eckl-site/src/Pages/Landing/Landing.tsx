import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import ecklImage from "../../Assets/Images/Eckl2.jpg";
import { TopBar } from "../../Components/TopBar/TopBar";
import { Tile } from "./Tile";

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
                _before={{
                    content: '""',
                    pos: "absolute",
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    bgImage: ecklImage,
                    opacity: 0.25,
                    bgSize: "cover",
                    bgPosition: "bottom",
                    zIndex: -1,
                }}
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
        </Box >
    );
};
