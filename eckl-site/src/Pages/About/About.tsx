import { Box, Center, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import ecklImage from "../../Assets/Images/Eckl2.jpg";
import ecklHeadshot from "../../Assets/Images/Eckl3.jpg";
import { TopBar } from "../../Components/TopBar/TopBar";
import { useIsMobile } from "../../utils";

export const About = () => {
    const isMobile = useIsMobile();

    return (
        <Box h={"100vh"} minH={"100vh"} w={"100vw"} minW={"100vw"}>
            <Flex
                w={"100%"}
                h={"95%"}
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
                    opacity: 0.15,
                    bgSize: "cover",
                    bgPosition: "bottom",
                    zIndex: -1,
                }}
            >
                <TopBar />
                <Box w={isMobile ? "100%" : "80%"} h="85%" bg="black" borderRadius={10} p={5} color="white" overflow={"scroll"}>
                    <Text align="center" fontSize={"3xl"} fontFamily={"monospace"}>About</Text>
                    <Spacer h={15} />
                    <Text align="center" fontSize={isMobile ? "xx-large" : "large"}>I am a musician, programmer, and educator currently based in Lake Charles, LA. I serve on the faculty at McNeese State University as Assistant Professor of Music Production, and do research in the areas of AI assisted composition, music education software, and audio plug-in development. I obtained my M.M. in Computer Music from The Peabody Conservatory of The Johns Hopkins University, and my B.M. in Music Recording Technology and Audio Design from San Diego State. I am also a proud alum of Monroe Community College.</Text><br />
                    <Text align="center" fontSize={isMobile ? "xx-large" : "large"}>I am also a developer at RIFFIT, where I work on the company's two flagship products: RIFFIT Reader and SongR. My primary responsibility is RIFFIT's core music technology, including a multi-genre AI powered algorithmic composition system, a digital instrument collection, and a dynamic mixing interface.</Text><br />
                    <Text align="center" fontSize={isMobile ? "xx-large" : "large"}>Periodically I do work as an audio engineer, being credited as the lead mix engineer on San Diego State’s 2019 Fall musical “She Loves Me” and composer Joseph Water’s debut opera “The Magic Hummingbird”. I've also served as a producer on countless records, spanning from Rock and Pop, to Jazz and Classical.</Text><br />
                    <Text align="center" fontSize={isMobile ? "xx-large" : "large"}>In my free time, I release music through my alternative solo project Your Name Here. Through the combined power of audio, video, and the internet, Your Name Here aims to tell stories with an overarching narrative. My non-music interests include horror movies, chess, artificial general intelligence, D&D, box lacrosse (Go Knighthawks), and pizza bagels.</Text><br />
                    <Center pt={10}><Image src={ecklHeadshot} w={"40%"} alt="Garrett Eckl" /></Center>
                </Box>
            </Flex >
        </Box >
    )
}