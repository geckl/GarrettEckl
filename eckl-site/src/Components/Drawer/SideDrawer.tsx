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

    const openInNewTab = (url: string) => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
        <>
            <IconButton
                aria-label="side bar"
                icon={<FaBars />}
                variant="player"
                m={2}
                //size={props.isMobile ? "xl" : "lg"}
                height={props.isMobile ? "75%" : "50px"}
                aspectRatio={1 / 1}
                //height={"100%"}
                borderRadius={10}
                onClick={onOpen}
            ></IconButton>
            <Box w="100%">
                <Drawer
                    isOpen={isOpen}
                    placement="left"
                    size={props.isMobile ? "full" : "xs"}
                    onClose={onClose}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton w={50} h={50} />
                        <DrawerHeader fontSize={props.isMobile ? "xxx-large" : "large"}>
                            Welcome to my site{" "}
                        </DrawerHeader>
                        <Spacer maxH={"50px"} />
                        <DrawerBody pt={0} pb={2}>
                            <VStack minH={"100%"}>

                                <Button w="80%" h={props.isMobile ? "100px" : "50px"} fontSize={props.isMobile ? "xxx-large" : "large"} onClick={() => { navigate("/about") }}>About Me</Button>
                                <Button w="80%" h={props.isMobile ? "100px" : "50px"} fontSize={props.isMobile ? "xxx-large" : "large"} onClick={() => {
                                    openInNewTab(ecklCV);
                                }}>CV</Button>
                                <Button w="80%" h={props.isMobile ? "100px" : "50px"} fontSize={props.isMobile ? "xxx-large" : "large"} onClick={() => { navigate("/squatch-sounds") }}>Squatch Sounds</Button>
                                <Button w="80%" h={props.isMobile ? "100px" : "50px"} fontSize={props.isMobile ? "xxx-large" : "large"} onClick={() => {
                                    openInNewTab("https://www.yournameheremusic.com/");
                                }}>Your Name Here</Button>
                                {/* <a href="https://class.garretteckl.com/" ><Button w="250px">Class Portal</Button></a> */}
                                <Button w="80%" h={props.isMobile ? "100px" : "50px"} fontSize={props.isMobile ? "xxx-large" : "large"} onClick={() => {
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
                                    <a href="mailto:garrettecklmusic@gmail.com">
                                        <Link
                                            w={"100%"}
                                            align="center"
                                            color="red"
                                            fontFamily={"Sofia Pro"}
                                            isExternal
                                        >
                                            garrettecklmusic@gmail.com
                                        </Link>
                                    </a>


                                </VStack>
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box >
        </>
    );
};
