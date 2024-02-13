import React from "react";
import { DateTime } from "luxon";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function TitleDisplay({ hours = 0, minutes = 0, seconds = 0 }) {
  const isRunning = useSelector((state) => state.timer.isRunning);
  const stage = useSelector((state) => state.timer.stage);

  if (isRunning) {
    let stageName = "";
    let formattedTime = "";

    switch (stage) {
      default:
      case "FOCUS":
        stageName = "focus";
        // change format to mm:ss instead of showing "12" for hrs when hrs are 0
        formattedTime = hours === 0
          ? DateTime.fromObject({ hours: 0, minutes, seconds }).toFormat("mm:ss")
          : DateTime.fromObject({ hours, minutes, seconds }).toFormat("hh:mm:ss");
        break;
      case "BREAK":
        stageName = "break";
        formattedTime = DateTime.fromObject({ minutes, seconds }).toFormat("mm:ss");
        break;
    }

    return (
      <Helmet defer={false}>
        <title>{`${stageName} - ${formattedTime}`}</title>
      </Helmet>
    );
  } else {
    return (
      <Helmet>
        <title>dennydoro</title>
      </Helmet>
    );
  }
}

TitleDisplay.propTypes = {
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
};

export default TitleDisplay;
