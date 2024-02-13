import React, { useState, useEffect } from "react";
import { Duration } from "luxon";
import { useDispatch, useSelector } from "react-redux";
import Bed from "./Bed";
import BedInteract from "./BedInteract";
import DennyLaying from "./DennyLaying";
import DennySleeping from "./DennySleeping";
import DennyLayingInteractive from "./DennyLayingInteractive";
import {resetTimer, setFocusStartTime, setFocusEndTime } from "../../store/slices/timerSlice";

function TotalFocusTime() {
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.timer.isRunning);
  const stage = useSelector((state) => state.timer.stage);

  const [totalFocusTime, setTotalFocusTime] = useState(0);
  const [savedTotalFocusTime, setSavedTotalFocusTime] = useState(0);
  const [totalFocusTimeForDay, setTotalFocusTimeForDay] = useState(0);

  useEffect(() => {
    let timerInterval;

    if (isRunning && stage === "FOCUS") {
      timerInterval = setInterval(() => {
        setTotalFocusTime((prevTotalFocusTime) => prevTotalFocusTime + 1);
        setTotalFocusTimeForDay((prevTotalFocusTimeForDay) => prevTotalFocusTimeForDay + 1);
      }, 1000);
    } else if (!isRunning && stage === "BREAK") {
      setSavedTotalFocusTime(totalFocusTime);
      dispatch(setFocusEndTime(Date.now()));
    } else {
      clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval);
  }, [isRunning, stage, totalFocusTime, totalFocusTimeForDay, dispatch]);

  const restartTotalFocusTime = () => {
    setTotalFocusTime(0);
    setSavedTotalFocusTime(0);
    dispatch(resetTimer());
  };

  useEffect(() => {
    if (isRunning && stage === "FOCUS") {
      dispatch(setFocusStartTime(Date.now()));
    }
  }, [isRunning, stage, dispatch]);

  let formattedTime = "";

  switch (stage) {
    case "FOCUS":
      formattedTime = Duration.fromObject({ seconds: totalFocusTime }).toFormat("hh:mm:ss");
      break;
    case "BREAK":
      formattedTime = Duration.fromObject({ seconds: savedTotalFocusTime }).toFormat("hh:mm:ss");
      break;
    default:
      break;
  }

  return (
    <>
      <Bed formattedTime={formattedTime} />
      {stage === "FOCUS" && <DennyLaying />}
      {stage === "BREAK" && <DennySleeping />}
      <BedInteract aria-label="reset total time" onClick={restartTotalFocusTime} />
      <DennyLayingInteractive aria-label="denny"/>
    </>
  );
}

export default TotalFocusTime;
