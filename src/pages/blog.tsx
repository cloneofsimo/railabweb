import React from "react";
import { graphql } from "gatsby";
import { Box, Heading, Text, useTheme } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";

import Header from "../components/Header";
import MDXComponents from "../components/MDXComponents";

const BlogPost = ({ data: { mdx }, children }) => {
  const { frontmatter } = mdx;
  const theme = useTheme();

  return (
    <Box>
      <Header />
      <Box maxW="800px" mx="auto" px={8} py={8}>
        <Heading
          as="h1"
          size="xl"
          mb={8}
          fontWeight="bold"
          fontSize={{ base: "3xl", md: "4xl" }}
          textAlign="center"
        >
          {frontmatter.title}
        </Heading>
        <article>
          <MDXProvider components={MDXComponents}>{children}</MDXProvider>
        </article>
      </Box>
    </Box>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
