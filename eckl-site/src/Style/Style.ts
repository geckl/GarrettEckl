import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const overrides = {
  config,
  styles: {
    global: {
      body: {
        fontFamily: "monospace",
        backgroundColor: "#404345",
        fontSize: "1.2em",
      },
      a: {
        fontFamily: "monospace",
      },
      p: {
        fontFamily: "monospace",
      },
    },
  },
  components: {
    Icon: {
      variants: {
        mixIcon: {
          boxSize: "1.25em",
          mr: ".7em",
          color: "purple",
        },
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "0px",
        color: "white",
        background: "#d87559",
        borderColor: "#d87559",
      },
      variants: {
        pitchSpinner: {
          backgroundColor: "transparent",
          color: "black",
          fontSize: "1.2rem",
          m: 0,
        },
        back: {
          borderColor: "d87559",
          border: "1px",
          _hover: {
            bg: "#d87559",
            textColor: "black",
          },
          textColor: "#d87559",
          bg: "transparent",
        },
        infoButton: {
          borderRadius: "full",
          bg: "brown",
          mr: "5px",
        },
      },
    },
    Form: {
      variants: {
        mp3Modal: {
          borderColor: "gray.400",
          color: "black",
          fontWeight: "thin",
        },
        mp3Pitch: {
          iconColor: "purple",
          size: "1.5em",
          textColor: "black",
        },
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "monospace",
      },
      variants: {
        secondary: {
          fontWeight: 300,
        },
        acknowledgements: {
          fontSize: "lg",
          fontWeight: "800",
          my: "0.5em",
        },
      },
    },
    Slider: {
      variants: {
        mp3: {
          bg: "black",
          color: "purple",
          sliderFillColor: "black",
          h: "3px",
          sliderThumbSize: "1.2em",
        },
        volumeAdjustment: {
          ml: ".7em",
          bg: "#bcbcbc",
          color: "purple",
          sliderFillColor: "black",
          h: "3px",
          sliderThumbSize: "1.2em",
        },
      },
    },
  },
};
export const Theme: Object = extendTheme(overrides);
