import React from "react";
import MenuButton from "components/MenuButton";
import PlayButton from "components/PlayButton";
import SkipButton from "components/SkipButton";
import {HStack} from "@chakra-ui/react";

function Controls() {
    return (
        <HStack spacing="50px">
            <MenuButton />
            <PlayButton />
            <SkipButton />
        </HStack>      
      );
}

export default Controls;