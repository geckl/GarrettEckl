import { GridItem, Image, SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import headerImage from "../../Assets/Images/Header.png";
import { SideDrawer } from "../Drawer/SideDrawer";

export const TopBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <SimpleGrid columns={3} width="100%" maxH={"5em"} mb={"1.5em"}>
        <GridItem>
          <SideDrawer isMobile={false} />
        </GridItem>
        <GridItem align="center" justify="center">
          <Image src={headerImage} h={"5em"} mt={".5em"} _hover={{ cursor: "pointer" }} onClick={() => { navigate("/") }} ></Image>
        </GridItem>
      </SimpleGrid>
    </>
  );
};
