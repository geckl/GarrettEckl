import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    HStack,
    IconButton,
    Link,
    Spacer,
    useDisclosure,
    useToast,
    VStack
} from "@chakra-ui/react";
import { FaBars, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ecklCV from "../../Assets/Images/GarrettEckl_OnlineResume.pdf";

export const SideDrawer = (props: { isMobile: boolean }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const toast = useToast();

    return (
        <>
            <IconButton
                aria-label="side bar"
                icon={<FaBars />}
                variant="player"
                m={2}
                borderRadius={5}
                onClick={onOpen}
            ></IconButton>
            <Box w="100%">
                <Drawer
                    isOpen={isOpen}
                    placement="left"
                    //size={props.isMobile ? "full" : "xs"}
                    onClose={onClose}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>
                            Welcome to my site{" "}
                        </DrawerHeader>
                        <DrawerBody pt={0} pb={2}>
                            <VStack minH={"100%"}>

                                <Button w="250px" onClick={() => { navigate("/about") }}>About Me</Button>
                                <a href={ecklCV}><Button w="250px">CV</Button></a>
                                <Button w="250px" onClick={() => { navigate("/squatch-sounds") }}>Squatch Sounds</Button>
                                <a href="https://www.yournameheremusic.com/" target="_blank" rel="noreferrer" ><Button w="250px">Your Name Here</Button></a>
                                {/* <a href="https://class.garretteckl.com/" ><Button w="250px">Class Portal</Button></a> */}
                                <Button w="250px" onClick={() => {
                                    toast({
                                        title: "Coming soon!",
                                        description: `Present me with the secret password "Orangutan" in class for extra credit. Extra extra credit if you randomly yell it out`,
                                        status: "error",
                                        duration: 5000,
                                        isClosable: true
                                    });
                                }}>Class Portal</Button>
                                <Spacer />
                                <VStack w="100%" justifyContent={"center"}>
                                    <HStack w="100%" justifyContent={"center"}>
                                        <Link
                                            href="https://facebook.com/garretteckl"
                                            isExternal
                                        >
                                            <IconButton
                                                aria-label="side bar"
                                                icon={<FaFacebook />}
                                                colorScheme="facebook"
                                                borderRadius={10}
                                                ml={2}
                                            ></IconButton>
                                        </Link>
                                        <Link
                                            href="https://twitter.com/garretteckl"
                                            isExternal
                                        >
                                            <IconButton
                                                aria-label="side bar"
                                                icon={<FaTwitter />}
                                                colorScheme="twitter"
                                                borderRadius={10}
                                                ml={2}
                                            ></IconButton>
                                        </Link>
                                        <Link
                                            href="https://www.instagram.com/garretteckl"
                                            isExternal
                                        >
                                            <IconButton
                                                aria-label="side bar"
                                                icon={<FaInstagram />}
                                                colorScheme="facebook"
                                                borderRadius={10}
                                                ml={2}
                                            ></IconButton>
                                        </Link>
                                    </HStack>
                                    <Link
                                        href="https://www.garretteckl.com"
                                        w={"100%"}
                                        align="center"
                                        color="red"
                                        fontFamily={"Sofia Pro"}
                                        isExternal
                                    >
                                        www.garretteckl.com
                                    </Link>


                                </VStack>
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box >
        </>
    );
};
