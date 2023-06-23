import React from "react";
import {
  Heading,
  Text,
  Code,
  OrderedList,
  Link as ChakraLink,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";

// https://prince.dev/highlight-with-react maybe use this later?

import { Highlight, themes } from "prism-react-renderer";

const PrismSyntaxHighlight = ({ children, className }) => {
  const language = className.replace(/language-/gm, "");

  return (
    <Highlight code={children} language={language} theme={themes.github}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <code className={className} style={style}>
          {tokens.slice(0, -1).map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </code>
      )}
    </Highlight>
  );
};
const MDXComponents = {
  h1: (props) => <Heading as="h1" size="xl" my={4} {...props} />,
  h2: (props) => <Heading as="h2" size="lg" my={4} {...props} />,
  h3: (props) => <Heading as="h3" size="md" my={4} {...props} />,
  h4: (props) => <Heading as="h4" size="sm" my={4} {...props} />,
  h5: (props) => <Heading as="h5" size="xs" my={4} {...props} />,
  h6: (props) => <Heading as="h6" size="xs" my={4} {...props} />,
  inlineCode: (props) => (
    <Code colorScheme="purple" fontSize="0.84em" {...props} />
  ),
  p: (props) => <Text my={2} {...props} />,
  ul: (props) => <UnorderedList styleType="circle" {...props} />,
  li: (props) => <ListItem mr={2} {...props} />,
  ol: (props) => (
    <OrderedList styleType="decimal" display="inline-block" {...props} />
  ),
  code: PrismSyntaxHighlight,

  a: (props) => (
    <ChakraLink
      color={useColorModeValue("teal.500", "teal.200")}
      isExternal
      {...props}
    />
  ),
};

export default MDXComponents;
