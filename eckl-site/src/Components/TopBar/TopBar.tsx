import { GridItem, IconButton, SimpleGrid } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

export const TopBar = () => {
  return (
    <SimpleGrid columns={3} width="100%" mb={".5em"}>
      <GridItem>
        <IconButton
          aria-label="side bar"
          icon={<FaBars />}
          variant="bugaboo"
        ></IconButton>
      </GridItem>
      <GridItem colStart={2} colEnd={3}>
        {/* <Image
                    src={useAltLogo ? riffitLogoBlack : riffitLogoWhite}
                    variant="riffitLogo"
                /> */}
      </GridItem>
      {/* <GridItem>Placeholder</GridItem> */}
    </SimpleGrid>
  );
};
