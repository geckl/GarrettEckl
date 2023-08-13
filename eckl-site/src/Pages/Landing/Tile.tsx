import { Center, GridItem, ScaleFade } from "@chakra-ui/react";
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
        <GridItem bg="#d87559" opacity={isHovering ? 1 : 0}>
            <ScaleFade in={isHovering}>
                <Center h='100%'>
                    Test
                </Center>
            </ScaleFade>
        </GridItem>
    )
}