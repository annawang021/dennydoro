import React from "react";

import {VisuallyHidden, useBreakpointValue } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { toggleRunning } from "store/slices/timerSlice";

import BowTie from "./BowTie";

function PlayButton() {
  const isRunning = useSelector((state) => state.timer.isRunning);
  const dispatch = useDispatch();
  const size = useBreakpointValue(["md", "lg"]);

  return (
      <BowTie onClick={() => dispatch(toggleRunning())}>
        <VisuallyHidden>play</VisuallyHidden>
      </BowTie>
  );
}

export default PlayButton;