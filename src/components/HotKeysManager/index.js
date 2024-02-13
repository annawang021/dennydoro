import React, {useState} from "react";

import { useDispatch, useSelector } from "react-redux";
import { nextStage } from "store/slices/timerSlice";
import { useHotkeys } from "react-hotkeys-hook";
import { toggleRunning } from "store/slices/timerSlice";
import SettingsModal from "../SettingsModal";

function HotKeysManager() {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);


  useHotkeys("space", (e) => {
    dispatch(toggleRunning());
    e.preventDefault();
  });

  useHotkeys("right", (e) => {
    dispatch(nextStage(settings));
    e.preventDefault();
  });

  useHotkeys("left", (e) => {
    setIsSettingsModalOpen(true);
    e.preventDefault();
  });

  return <SettingsModal isOpen={isSettingsModalOpen} onClose={() => setIsSettingsModalOpen(false)} />;
}

export default HotKeysManager;





