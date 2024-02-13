import { mode } from "@chakra-ui/theme-tools";

export default {
  baseStyle: (props) => ({
    track: {
      bg: mode("blackAlpha.200", "whiteAlpha.200")(props),
      _checked: {
        bg: mode("accent.950", "accent.50")(props),
      },
    },
    thumb: {
      bg: mode("accent.50", "accent.950")(props),
    },
  }),
};
