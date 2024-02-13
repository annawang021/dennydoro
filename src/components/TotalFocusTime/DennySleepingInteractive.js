import React, { useRef } from "react";
import loudPurr from "../../assets/sounds/loud-purr.m4a";
import softPurr from "../../assets/sounds/soft-purr.m4a";

const DennySleepingInteractive = () => {
  const loudPurrAudioRef = useRef(null);
  const softPurrAudioRef = useRef(null);

  const playSound = (audioRef, soundFile) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    audioRef.current = new Audio(soundFile);
    audioRef.current.play();
  };

  const stopSound = (audioRef) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const playLoudPurrHover = () => {
    playSound(loudPurrAudioRef, loudPurr);
  };

  const stopLoudPurrHover = () => {
    stopSound(loudPurrAudioRef);
  };

  const playPawPurr = () => {
    playSound(softPurrAudioRef, softPurr);
  };

  const stopSoftPurr = () => {
    stopSound(softPurrAudioRef);
  };

  return (
    <>
      <div
        onMouseEnter={playLoudPurrHover}
        onMouseLeave={stopLoudPurrHover}
        style={{
          cursor: "grab",
          zIndex: 4,
          position: "fixed",
          width: "280px",
          height: "120px",
          bottom: 100,
          right: 80,
        }}
      ></div>
      <div
        onMouseEnter={playPawPurr}
        onMouseLeave={stopSoftPurr}
        style={{
          cursor: "grab",
          zIndex: 4,
          position: "fixed",
          width: "100px",
          height: "40px",
          transform: "rotate(40deg)",
          bottom: 45,
          right: 20,
        }}
      ></div>
      <div
        onMouseEnter={playPawPurr}
        onMouseLeave={stopSoftPurr}
        style={{
          backgroundColor: "#3333",
          cursor: "grab",
          zIndex: 4,
          position: "fixed",
          width: "100px",
          height: "40px",
          transform: "rotate(20deg)",
          bottom: 100,
          right: 20,
        }}
      ></div>
    </>
  );
};

export default DennySleepingInteractive;
