import React, { useRef } from "react";
import loudPurr from "../../assets/sounds/loud-purr.m4a";

const DennyLayingInteractive = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current && audioRef.current.state === "suspended") {
      audioRef.current.resume();
    }

    if (!audioRef.current || audioRef.current.paused) {
      audioRef.current = new Audio(loudPurr);
      audioRef.current.volume = 1; // Set volume to 1 for normal volume
      audioRef.current.play().catch((error) => console.error(error));
    }
  };

  const handleMouseMove = () => {
    playSound();
  };

  const handleClick = () => {
    if (audioRef.current && audioRef.current.state === "suspended") {
      audioRef.current.resume();
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onClick={handleClick} 
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
  );
};

export default DennyLayingInteractive;
