import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ecklImage from "../../Assets/Images/Eckl.jpg";
import { TopBar } from "../../Components/TopBar/TopBar";

export const About = () => {

    return (
        <Box h={"100vh"} minH={"100vh"} w={"100vw"} minW={"100vw"}>
            <Flex
                w={"100%"}
                h={"inherit"}
                minH={350}
                minW={340}
                flexDirection={"column"}
                alignItems={"center"}
                background={`linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)), url(${ecklImage})`}
                bgSize={"cover"}
            >
                <TopBar />
                <Box w="80%" h="80%" bg="black" borderRadius={10} p={5} color="white" >
                    <Heading align="center">About</Heading>
                    <Text>I am a musician, programmer, and educator currently based in Lake Charles, LA. I serve on the faculty at McNeese State University as Assistant Professor of Music Production, and do research in the areas of AI assisted composition, music education software, and audio plug-in development. I obtained my M.M. in Computer Music from The Peabody Conservatory of The Johns Hopkins University, and my B.M. in Music Recording Technology and Audio Design from San Diego State.</Text>

                    <Text>I am also a developer at RIFFIT, where I work on the company's two flagship products: RIFFIT Reader and SongR. My primary responsibility is RIFFIT's core music technology, including a multi-genre AI powered algorithmic composition system, a digital instrument collection, and a dynamic mixing interface.</Text>

                    <Text>Periodically I do work as an audio engineer, being credited as the lead mix engineer on San Diego State’s 2019 Fall musical “She Loves Me” and composer Joseph Water’s debut opera “The Magic Hummingbird”. I've also served as a producer on countless records, spanning from Rock and Pop, to Jazz and Classical.</Text>

                    <Text>In my free time, I release music through my alternative solo project Your Name Here. Through the combined power of audio, video, and the internet, Your Name Here aims to tell stories with an overarching narrative. My non-music interests include chess, horror movies, artificial general intelligence, box lacrosse, sustainability, and dungeons and dragons</Text>
                </Box>
            </Flex >
        </Box >
    )
}