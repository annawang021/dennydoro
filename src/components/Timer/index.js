import React, { useEffect, useRef } from "react";
import { DateTime } from "luxon";
import { useTimer } from "react-timer-hook";
import { Container, VStack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import Display from "components/Display";
import Controls from "components/Controls";
import TitleDisplay from "components/TitleDisplay";

import { nextStage, toggleRunning } from "store/slices/timerSlice";

function Timer() {
  const dispatch = useDispatch();

  // Get app state
  const settings = useSelector((state) => state.settings);
  const isRunning = useSelector((state) => state.timer.isRunning);
  const stage = useSelector((state) => state.timer.stage);


  // Handle pause and resume
  useEffect(() => {
    if (isRunning) {
      resume();
    } else {
      pause();
    }
  }, [isRunning]);

  // Handle timer stage updates
  useEffect(() => {
    let restartTime = 0;

    switch (stage) {
      default:
      case "FOCUS":
        restartTime = settings.focusLengthHrs.value * 60 + settings.focusLengthMins.value; // convert hours to minutes
        break;
      case "BREAK":
        restartTime = settings.breakLength.value;
        break;
    }

    if (isRunning) {
      dispatch(toggleRunning());
      setTimeout(() => {
        restart(DateTime.now().plus({ minutes: restartTime }), false);
      }, 100);
    } else {
      restart(DateTime.now().plus({ minutes: restartTime }), false);
    }
  }, [settings.focusLengthHrs.value, settings.focusLengthMins.value, settings.breakLength.value, stage]);

  // Init timer
  const { seconds, minutes, hours, pause, resume, restart } = useTimer({
    expiryTimestamp: DateTime.now(),
    onExpire: () => {
      dispatch(nextStage(settings));
      dispatch(toggleRunning(false));
    },
  });

  return (
    <Container>
    <TitleDisplay hours={hours} minutes={minutes} seconds={seconds} />
    <Text variant="title">dennydoro</Text>
      <VStack align="center" justify="center" spacing="20px">
        <Display hours={hours} minutes={minutes} seconds={seconds} />
        <Controls />
      </VStack>
    </Container>
  
  );
}

export default Timer;
