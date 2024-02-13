import React, { useEffect } from "react";

import { DateTime } from "luxon";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Text, VStack } from "@chakra-ui/react";
import { animated, useSpring } from "react-spring";

function Display({ hours = 0, minutes = 0, seconds = 0 }) {
  const isRunning = useSelector((state) => state.timer.isRunning);
  const stage = useSelector((state) => state.timer.stage);

  const [style, api] = useSpring(() => ({ to: {} }));

  useEffect(() => {
    const config = {
      tension: 180,
      friction: 11,
    };
    if (isRunning) {
      api.start({
        to: { fontVariationSettings: "'wght' 800, 'wdth' 110, 'opsz' 14" },
        config,
      });
    } else {
      api.start({
        to: { fontVariationSettings: "'wght' 400, 'wdth' 110, 'opsz' 14" },
        config,
      });
    }
  }, [isRunning]);

  const formattedHrs = stage === "FOCUS" && hours === 0 ? "00" : DateTime.fromFormat(`${hours}`, "h").toFormat("hh");
  const formattedMins = DateTime.fromFormat(`${minutes}`, "m").toFormat("mm");
  const formattedSecs = DateTime.fromFormat(`${seconds}`, "s").toFormat("ss");

  return (
    <VStack>
      <animated.div style={style}>
      {stage === "FOCUS" && <Text variant="display">{formattedHrs}</Text>}
        <Text variant="display">{formattedMins}</Text>
        <Text variant="display">{formattedSecs}</Text>
      </animated.div>
    </VStack>
  );
}

Display.propTypes = {
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
};

export default Display;