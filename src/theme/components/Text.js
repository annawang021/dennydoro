import { mode } from "@chakra-ui/theme-tools";

export default {
  variants: {
    display: {
      fontSize: ["4rem", "7rem", "10rem"],
      lineHeight: 0.8,
      transitionProperty: "color",
      transitionDuration: "normal",
    },
    label: {
      fontSize: ["1.25rem", "1.5rem"],
      fontWeight: 500,
      whiteSpace: "nowrap",
    },
    title: {
      fontSize: ["1rem", "2rem", "3rem"],
      fontWeight: 1000,
      transitionProperty: "color",
      transitionDuration: "normal",
      textAlign: "center", 
      display: "flex",
      alignItems: "center", 
      justifyContent: "center",
      paddingTop:"30px",
      paddingBottom:"20px",
    },
    totalTime: (props) => {
      return {
        fontSize: ["20px","30px","40px"],
        fontWeight: "bolder",
        color: mode("accent.50", "accent.900")(props),
      };
    },
  },
};
