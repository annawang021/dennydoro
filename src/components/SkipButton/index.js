import React from "react";

import { ArrowFatLinesRight } from "phosphor-react";
import {VisuallyHidden, useBreakpointValue } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { nextStage } from "store/slices/timerSlice";

function SkipButton() {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const size = useBreakpointValue(["sm", "md"]);

  return (
    <button variant="secondary" size={size}
      onClick={() => dispatch(nextStage(settings))}
    >
      <ArrowFatLinesRight size="50" weight="fill" />
      <VisuallyHidden>skip</VisuallyHidden>
    </button>
  );
}

export default SkipButton;
