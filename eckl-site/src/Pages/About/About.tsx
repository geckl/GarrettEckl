import { Box, Center, Flex, Image, Link, Spacer, Text } from "@chakra-ui/react";
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
                h={"inherit"}
                // minH={350}
                // minW={340}
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
                <Box w={isMobile ? "100%" : "80%"} h="75%" bg="black" borderRadius={10} p={5} color="white" overflow={"scroll"}>
                    <Text align="center" fontSize={"3xl"} fontFamily={"monospace"}>About</Text>
                    <Spacer h={15} />
                    <Text align="center" >I am a musician, programmer, and educator currently based in Lake Charles, LA. I serve on the faculty at McNeese State University as Assistant Professor of Music Production, where I coordinate the department’s Music Production degree concentration. On the rare occasion when I’m not busy overseeing recording sessions and giving feedback on student mixes, my personal work currently pertains to networked audio systems, music education software, and audio plug-in development. I earned an M.M. in Computer Music from The Peabody Conservatory of The Johns Hopkins University, a B.M. in Music Recording Technology and Audio Design from San Diego State, and an A.S. in Liberal Arts from Monroe Community College.</Text><br />
                    <Text align="center" >I am also a developer of the <Link href="https://app.riffitnow.com" color={"#85bfee"} target="_blank" rel="noreferrer">RIFFIT Reader</Link> and <Link href="https://app.songr.ai" color={"#d87559"} target="_blank" rel="noreferrer">SongR</Link>  text-to-song applications. Originally developed as a learning tool to help people with neurological differences improve reading retention and comprehension, these tools have been used for the real-time generation of over one million custom songs. As Director of Engineering, I led the development of custom music technologies for artist and brands including Michael Bublé, TechnoDramatists, and Toblerone.</Text><br />
                    <Text align="center" >Periodically I do freelance work as a music production or audio engineer. I enjoy running sound for musical theater, doing sound design for short films and video games, and making interactive web-based music. My non-musical interests (of which I don’t spend nearly enough time on) include horror movies, chess, D&D, box lacrosse (Go Knighthawks!), road trips and diner coffee.</Text><br />
                    <Center pt={10}><Image src={ecklHeadshot} w={"40%"} alt="Garrett Eckl" /></Center>
                </Box>
            </Flex >
        </Box >
    )
}