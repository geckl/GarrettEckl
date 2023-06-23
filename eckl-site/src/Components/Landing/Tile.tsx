import { Center, GridItem } from "@chakra-ui/react";
import { useState } from "react";

export const Tile = () => {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <GridItem bg="red" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} opacity={isHovering ? 1 : 0}>
            <Center h='100%'>
                Test
            </Center>
        </GridItem>
    )
}