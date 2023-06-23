import * as React from "react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = {
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "body",
        lineHeight: "base",
      },

      pre: {
        backgroundColor: mode("gray.200", "whiteAlpha.300")(props),
        color: mode("gray.200", "whiteAlpha.300")(props),
        whiteSpace: "pre-wrap",
        fontSize: "0.9em", // smaller font size
        margin: "0.5em", // smaller margins
        padding: "0.5em", // smaller padding
        borderRadius: "0.5em", // rounded corners
      },
    }),
  },
};

export const wrapRootElement = ({ element }) => (
  <ChakraProvider theme={extendTheme(theme)}>{element}</ChakraProvider>
);
