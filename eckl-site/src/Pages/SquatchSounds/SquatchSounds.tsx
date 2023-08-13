import { Box, Flex, HStack, Image, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
import humanizerAU from "../../Assets/Files/Real Time Humanizer.component.zip";
import humanizerVST3 from "../../Assets/Files/Real Time Humanizer.vst3.zip";
import ezdspImage from "../../Assets/Images/EZDSP.png";
import ecklImage from "../../Assets/Images/Eckl2.jpg";
import humanizerImage from "../../Assets/Images/RTHumanizer.png";
import { TopBar } from "../../Components/TopBar/TopBar";
import { useIsMobile } from "../../utils";

export const SquatchSounds = () => {
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
                    <Text align="center" fontSize={"3xl"}>Squatch Sounds</Text>
                    <Spacer h={15} />
                    <Text align="center">"Squatch Sounds is an audio software company founded by Garrett Eckl. Focused on innovation and accessibility, Squatch Sounds software includes cutting edge DSP programs, workflow tools, and educational software."</Text><br />
                    <Tabs>
                        <TabList>
                            <Tab >EZDSP</Tab>
                            <Tab >Real Time Humanizer</Tab>
                            <Tab >Coming Soon</Tab>
                        </TabList>

                        <TabPanels h={"100%"}>
                            <TabPanel minH={400}>
                                <HStack w={"auto"} h={"100%"}>
                                    <VStack w={"50%"} h={"100%"}>
                                        <a href="https://geckl.github.io/EZDSP/"><Image src={ezdspImage} alt="EZDSP" /></a>
                                    </VStack>
                                    <VStack w={"50%"} h={"100%"} >
                                        <Text as='i' >EZDSP is an audio plug-in that lets you edit the plug-in's DSP source code from directly within your favorite DAW. See the <u><a href="https://geckl.github.io/EZDSP/" target="_blank" rel="noreferrer" >EZDSP Homepage</a></u> for more information.</Text>
                                        <Spacer />
                                        <Text as='b'>Download EZDSP:</Text>
                                        <HStack>
                                            <u><a href="https://geckl.github.io/EZDSP/Download">AU</a></u>
                                            <Spacer />
                                            <u><a href="https://geckl.github.io/EZDSP/Download">VST3</a></u>
                                        </HStack>
                                    </VStack>
                                </HStack>
                            </TabPanel>
                            <TabPanel minH={400}>
                                <HStack w={"auto"} h={"100%"}>
                                    <VStack w={"50%"} h={"100%"}>
                                        <a href="https://geckl.github.io/EZDSP/"><Image src={humanizerImage} alt="Real Time Humanizer" /></a>
                                    </VStack>
                                    <VStack w={"50%"} h={"100%"}>
                                        <Text as='i'>Randomize the timing and velocities of your MIDI notes in real-time, or add beat emphasization. This plug-in allows you to customize MIDI performances without permanently modifying the MIDI file.</Text>
                                        <Spacer />
                                        <Text as='b'>Download Real Time Humanizer:</Text>
                                        <HStack>
                                            <u><a href={humanizerAU}>AU</a></u>
                                            <Spacer />
                                            <u><a href={humanizerVST3}>VST3</a></u>
                                        </HStack>
                                    </VStack>
                                </HStack>
                            </TabPanel>
                            <TabPanel>
                                <p>!!!</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Flex >
        </Box >
    )
}