import React from "react";

import PropTypes from "prop-types";
import { updateSetting } from "store/slices/settingsSlice";
import { useDispatch } from "react-redux";
import {
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Switch,
} from "@chakra-ui/react";

import {MoonIcon, SunIcon} from "@chakra-ui/icons"

function SettingInput({ name, friendlyName, type, value, onChange }) {
  const dispatch = useDispatch();

  const numberHandler = (e) => {
    let inputValue = e;
    let clampedValue;

    // Handle the case when the input is a negative sign without a number
    if (inputValue === "-") {
      inputValue = "0";
    }

    switch (name) {
      case "focusLengthHrs":
        clampedValue = Math.min(Math.max(parseInt(inputValue, 10) || 0, 0), 12);
        break;
      case "focusLengthMins":
      case "breakLength":
        clampedValue = Math.min(Math.max(parseInt(inputValue, 10) || 0, 0), 59);
        break;
      default:
        clampedValue = isNaN(parseInt(inputValue, 10)) ? 0 : parseInt(inputValue, 10);
    }
  
    dispatch(
      updateSetting({
        name,
        value: clampedValue,
      }),
    );
  };
  

  const switchHandler = (e) => {
    dispatch(updateSetting({ name, value: e.target.checked }));
  };

  const stringHandler = () => {
    const updatedValue = value === "day" ? "night" : "day";
    dispatch(updateSetting({ name, value: updatedValue != null ? updatedValue : "" }));
  };

  return (
    <FormControl
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px="1.5rem"
      height="4rem"
    >
      <FormLabel htmlFor={name} mb="0">
        {friendlyName}
      </FormLabel>

      {type === "number" && (
        <NumberInput
          maxW="6rem"
          value={value === null || value === undefined ? '' : value}
          onChange={onChange ? onChange : numberHandler}
        >
          <NumberInputField id={name} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      )}


      {type == "bool" && (
        <Switch
          id={name}
          isChecked={value}
          onChange={onChange ? onChange : switchHandler}
        />
      )}

      {type === "string" && (
        <button
          onClick={onChange ? onChange : stringHandler}
          aria-label={`toggle ${friendlyName}`}
          >
            {value === "day" ? <SunIcon boxSize={7}/> : <MoonIcon boxSize={7}/>}
          </button> 
      )}
    </FormControl>
  );
}

SettingInput.propTypes = {
  name: PropTypes.string,
  friendlyName: PropTypes.string,
  type: PropTypes.oneOf(["bool", "number", "string"]),
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
};

SettingInput.defaultProps = {
  type: "number",
};

export default SettingInput;