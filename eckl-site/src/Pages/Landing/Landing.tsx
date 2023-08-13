import { Box, Flex, Spacer } from "@chakra-ui/react";
import { KeyboardShortcuts, MidiNumbers, Piano } from 'react-piano';
import 'react-piano/dist/styles.css';
import ecklImage from "../../Assets/Images/Eckl2.jpg";
import { TopBar } from "../../Components/TopBar/TopBar";
import SoundfontProvider from "./SoundfontProvider";

const audioContext = new (window.AudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

const firstNote = MidiNumbers.fromNote('c3');
const lastNote = MidiNumbers.fromNote('g4');
const noteRange = {
    first: firstNote,
    last: lastNote,
};

const CUSTOM_KEYS = [
    { natural: 'a', flat: 'q', sharp: 'w' },
    { natural: 's', flat: 'w', sharp: 'e' },
    { natural: 'd', flat: 'e', sharp: 'r' },
    { natural: 'f', flat: 'r', sharp: 't' },
    { natural: 'g', flat: 't', sharp: 'y' },
    { natural: 'h', flat: 'y', sharp: 'u' },
    { natural: 'j', flat: 'u', sharp: 'i' },
    { natural: 'k', flat: 'i', sharp: 'o' },
    { natural: 'l', flat: 'o', sharp: 'p' },
    { natural: ';', flat: 'p', sharp: '[' },
    { natural: "'", flat: 'v', sharp: 'b' },
    { natural: "\\", flat: ']', sharp: 'z' },
];
const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: CUSTOM_KEYS,
});


export const Landing = () => {

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
                    opacity: 0.25,
                    bgSize: "cover",
                    bgPosition: "bottom",
                    zIndex: -1,
                }}
            >
                <TopBar />
                <Spacer h={"calc(100vh - 450)"} />
                <Box w="80%" h={300} bg="black" borderRadius={10} p={5} color="white" overflow={"scroll"}>
                    <SoundfontProvider
                        instrumentName="acoustic_grand_piano"
                        audioContext={audioContext}
                        hostname={soundfontHostname}
                        render={({ isLoading, playNote, stopNote }) => (
                            <Piano
                                noteRange={noteRange}
                                playNote={playNote}
                                stopNote={stopNote}
                                disabled={isLoading}
                                keyboardShortcuts={keyboardShortcuts}
                            //{...props}
                            />
                        )}
                    />
                </Box>
                {/* <SimpleGrid columns={6} spacing={2} w="100%" h="100%">
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
                </SimpleGrid> */}
            </Flex>
        </Box >
    );
};
