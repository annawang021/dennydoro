import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import ThemeColorUpdater from "components/ThemeColorUpdater";
import { customLocalStorageManager } from "utils/customLocalStorageManager";
import theme from "theme";

function ThemeProvider({ children }) {
  const stage = useSelector((state) => state.timer.stage);

  const [stageTheme, setStageTheme] = useState(theme);

  useEffect(() => {
    switch (stage) {
      default:
      case "FOCUS":
        setStageTheme({
          ...theme,
          colors: {
            ...theme.colors,
            accent: theme.colors.fur,
            accentAlpha: theme.colors.furAlpha,
          },
        });
        break;
      case "BREAK":
        setStageTheme({
          ...theme,
          colors: {
            ...theme.colors,
            accent: theme.colors.beans,
            accentAlpha: theme.colors.beansAlpha,
          },
        });
        break;
    }
  }, [stage]);

  return (
    <ChakraProvider
      theme={stageTheme}
      colorModeManager={customLocalStorageManager}
    >
      <ColorModeScript initialColorMode={stageTheme.config.initialColorMode} />
      <ThemeColorUpdater />
      {children}
    </ChakraProvider>
  );
}
ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
