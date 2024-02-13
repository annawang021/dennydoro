import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";

function FaviconUpdater() {
  const stage = useSelector((state) => state.timer.stage);
  const [suffix, setSuffix] = useState("focus");

  useEffect(() => {
    switch (stage) {
      default:
      case "FOCUS":
        setSuffix("focus");
        break;
      case "BREAK":
        setSuffix("break");
        break;
    }
  }, [stage]);

  return (
    <Helmet>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`assets/favicons/favicon-${suffix}-32x32.png?v=M44lzPylqQ`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`assets/favicons/favicon-${suffix}-16x16.png?v=M44lzPylqQ`}
      />
      <link
        rel="shortcut icon"
        sizes="any"
        href={`assets/favicons/favicon-${suffix}.ico?v=M44lzPylqQ`}
      />
    </Helmet>
  );
}

export default FaviconUpdater;
