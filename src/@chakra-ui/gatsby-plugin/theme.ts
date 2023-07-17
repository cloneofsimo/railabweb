import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const theme = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'body',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('white', 'gray.800')(props),
        lineHeight: 'base',
      },
      '*::placeholder': {
        color: mode('gray.400', 'whiteAlpha.400')(props),
      },
      '*, *::before, &::after': {
        borderColor: mode('gray.200', 'whiteAlpha.300')(props),
        wordWrap: 'break-word',
      },
      'pre' :{ 
        backgroundColor: mode('gray.200', 'gray.300')(props),
        color: mode('gray.200', 'whiteAlpha.300')(props),
        whiteSpace: 'pre-wrap', 
        fontSize: '0.9em',  // smaller font size
        margin: '0.5em',  // smaller margins
        padding: '0.5em',  // smaller padding
        borderRadius: '0.5em',  // rounded corners
      },
    }),
  },
}

export default extendTheme(theme);
