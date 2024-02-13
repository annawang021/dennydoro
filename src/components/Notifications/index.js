import { useEffect } from "react";

import { useSelector } from "react-redux";
import { notifyMe, requestNotifications } from "utils/notify";

function Notifications() {
  const settings = useSelector((state) => state.settings);
  const isRunning = useSelector((state) => state.timer.isRunning);
  const stage = useSelector((state) => state.timer.stage);

  useEffect(() => {
    if (settings.notify.value && isRunning) {
      switch (stage) {
        default:
        case "FOCUS":
          notifyMe("dennydoro", { body: "grind time! let's lock in 😾", silent: true });
          break;
        case "BREAK":
          notifyMe("dennydoro", { body: "i'm hungry, let's take a break 🐱", silent: true });
          break;
      }
    }
  }, [stage]);

  useEffect(() => {
    if (isRunning) requestNotifications();
  }, [isRunning]);

  return null;
}

export default Notifications;
