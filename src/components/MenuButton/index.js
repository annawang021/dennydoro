import React from "react";

import { SlidersHorizontal } from "phosphor-react";
import {
  VisuallyHidden,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import SettingsModal from "components/SettingsModal";

function MenuButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const size = useBreakpointValue(["sm", "md"]);

  return (
    <>
      <button variant="secondary" size={size} onClick={onOpen}>
        <SlidersHorizontal size="50" weight="fill" />
        <VisuallyHidden>settings</VisuallyHidden>
      </button>
      <SettingsModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default MenuButton;