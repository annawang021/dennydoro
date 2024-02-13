import React from "react";

import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
  useColorMode,
  Tooltip,
} from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";


import SettingInput from "./SettingInput";
import { resetSettings } from "store/slices/settingsSlice";

function SettingsModal({ isOpen, onClose }) {
  const { colorMode, toggleColorMode } = useColorMode();

  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const handleResetSettings = () => {
    dispatch(resetSettings()); 
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>settings</ModalHeader>
        <ModalCloseButton />
        <VStack spacing="0" align="stretch" pb="1.5rem">
          <SettingInput
            name="displayTheme"
            friendlyName="display theme"
            type="string"
            value={(colorMode === "light" ? "day" : "night") || ""}
            onChange={toggleColorMode}
          />
          <SettingInput
            key="focusLengthHrs"
            name="focusLengthHrs"
            friendlyName="focus length (hrs)"
            type="number"
            value={settings.focusLengthHrs.value}
          />

          <SettingInput 
            key="focusLengthMins"
            name="focusLengthMins"
            friendlyName="focus length (mins)"
            type="number"
            value={settings.focusLengthMins.value}
          />

          <SettingInput
            key="breakLength"
            name="breakLength"
            friendlyName="break length (mins)"
            type="number"
            value={settings.breakLength.value}
          />

          <SettingInput
            key="sound"
            name="sound"
            friendlyName="sound"
            type="bool"
            value={settings.sound.value}
          />

          <SettingInput
            key="notify"
            name="notify"
            friendlyName="notifications"
            type="bool"
            value={settings.notify.value}
          />
          <Tooltip label="reset to default settings">
            <button
              aria-label="reset settings"
              onClick={handleResetSettings}>
                <RepeatIcon boxSize={7}/>
            </button>
          </Tooltip>
        </VStack>
      </ModalContent>
    </Modal>
  );
}

SettingsModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default SettingsModal;