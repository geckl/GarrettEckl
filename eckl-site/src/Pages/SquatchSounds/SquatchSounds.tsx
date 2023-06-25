import { Box, Flex, HStack, Heading, Image, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
import humanizerAU from "../../Assets/Files/Real Time Humanizer.component.zip";
import humanizerVST3 from "../../Assets/Files/Real Time Humanizer.vst3.zip";
import ezdspImage from "../../Assets/Images/EZDSP.png";
import ecklImage from "../../Assets/Images/Eckl.jpg";
import humanizerImage from "../../Assets/Images/RTHumanizer.png";
import { TopBar } from "../../Components/TopBar/TopBar";

export const SquatchSounds = () => {

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
                <Box w="80%" h="95%" bg="black" borderRadius={10} p={5} color="white" >
                    <Heading align="center">Squatch Sounds</Heading>
                    <Text>"Squatch Sounds is an audio software company founded by Garrett Eckl. Focused on innovation and accessibility, Squatch Sounds software includes cutting edge DSP programs, workflow tools, and educational software."</Text>
                    <Tabs>
                        <TabList>
                            <Tab>EZDSP</Tab>
                            <Tab>Real Time Humanizer</Tab>
                            <Tab>Coming Soon</Tab>
                        </TabList>

                        <TabPanels h={"100%"}>
                            <TabPanel minH={400}>
                                <HStack w={"100%"} h={"100%"}>
                                    <VStack w={350} h={"100%"}>
                                        <a href="https://geckl.github.io/EZDSP/"><Image src={ezdspImage} h={400} alt="EZDSP" /></a>
                                    </VStack>
                                    <Spacer />
                                    <VStack w={350} h={"100%"}>
                                        <Text as='i' h={150}>EZDSP is an audio plug-in that lets you edit the plug-in's DSP source code from directly within your favorite DAW. See the <u><a href="https://geckl.github.io/EZDSP/" target="_blank" rel="noreferrer" >EZDSP Homepage</a></u> for more information.</Text>
                                        <Spacer />
                                        <Text as='b'>Download:</Text>
                                        <HStack>
                                            <u><a href="https://geckl.github.io/EZDSP/Download">AU</a></u>
                                            <Spacer />
                                            <u><a href="https://geckl.github.io/EZDSP/Download">VST3</a></u>
                                        </HStack>
                                    </VStack>
                                </HStack>
                            </TabPanel>
                            <TabPanel minH={400}>
                                <HStack w={"100%"} h={"100%"}>
                                    <VStack w={350} h={"100%"}>
                                        <a href="https://geckl.github.io/EZDSP/"><Image src={humanizerImage} h={400} alt="Real Time Humanizer" /></a>
                                    </VStack>
                                    <Spacer />
                                    <VStack w={350} h={"100%"}>
                                        <Text as='i' h={150}>Randomize the timing and velocities of your MIDI notes in real-time, or add beat emphasization. This plug-in allows you to customize MIDI performances without permanently modifying the MIDI file.</Text>
                                        <Spacer />
                                        <Text as='b'>Download:</Text>
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