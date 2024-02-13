import { useEffect } from "react";

import useSound from "use-sound";

import doorMeow from "assets/sounds/door-meow.m4a";
import hungryMeow from "assets/sounds/hungry-meow.m4a";
import loudPurr from "assets/sounds/loud-purr.m4a";
import softPurr from "assets/sounds/soft-purr.m4a";
import { useSelector } from "react-redux";

function Sounds() {
  const settings = useSelector((state) => state.settings);
  const isRunning = useSelector((state) => state.timer.isRunning);
  const stage = useSelector((state) => state.timer.stage);
  const prevStage = useSelector((state) => state.timer.prevStage);

  const [playBreakStart] = useSound(doorMeow);
  const [playBreakEnd] = useSound(hungryMeow);
  const [playStart] = useSound(softPurr);

  useEffect(() => {
    if (isRunning && settings.sound.value) playStart();
  }, [isRunning]);

  useEffect(() => {
    if (settings.sound.value) {
      switch (stage) {
        default:
        case "FOCUS":
          switch (prevStage) {
            default:
            case "BREAK":
              playBreakEnd();
              break;
          }
          break;
        case "BREAK":
          playBreakStart();
          break;
      }
    }
  }, [stage]);

  return null;
}

export default Sounds;
