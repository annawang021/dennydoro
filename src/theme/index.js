import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import "@fontsource/roboto-flex/variable-full.css";
import "@fontsource/roboto-flex/400.css";

import FormLabel from "./components/FormLabel";
import Modal from "./components/Modal";
import NumberInput from "./components/NumberInput";
import Switch from "./components/Switch";
import Text from "./components/Text";
import colors from "./colors";

const theme = extendTheme({
  colors,
  components: {
    FormLabel,
    Modal,
    NumberInput,
    Switch,
    Text,
  },
  config: {
    initialColorMode: "system",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Roboto FlexVariable', 'Roboto Flex', Roboto, sans-serif",
    body: "'Roboto FlexVariable', 'Roboto Flex', Roboto, sans-serif",
  },
  transition: {
    duration: {
      normal: "300ms",
    },
  },
  breakpoints: {
    xs: "23em", // 368px
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "body",
        color: mode("accent.900", "accent.50")(props),
        bg: mode("accent.50", "accent.950")(props),
        transitionProperty: "background-color",
        transitionDuration: "normal",
        lineHeight: "base",
      },
      "*::placeholder": {
        color: mode("gray.400", "whiteAlpha.400")(props),
      },
      "*, *::before, &::after": {
        borderColor: mode("blackAlpha.100", "whiteAlpha.100")(props),
        WebkitTapHighlightColor: "transparent",
        wordWrap: "break-word",
      },
    }),
  },
});

export default theme;
