import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

import Header from "../components/Header";
import classData from "../people/class.json";

const PeopleSummary = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "people" }
          childMdx: { frontmatter: { title: { ne: null } } }
        }
      ) {
        nodes {
          childMdx {
            frontmatter {
              title
              featuredImage {
                childImageSharp {
                  gatsbyImageData(width: 300, height: 400, layout: CONSTRAINED)
                }
              }
            }
            body
          }
        }
      }
    }
  `);

  const people = data.allFile.nodes;

  const getNaturalName = (normalizedName) => {
    const name = normalizedName.replace("_", " ");
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const renderPeopleByClass = (className) => {
    const peopleOfClass = classData[className] || [];
    const filteredPeople = people.filter((person) =>
      peopleOfClass.includes(person.childMdx?.frontmatter.title)
    );
    const peopleOfClassAsMdx = peopleOfClass.map((person) => {
      return people.find((p) => p.childMdx?.frontmatter.title === person);
    });

    console.log(peopleOfClassAsMdx);

    return (
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>
          {getNaturalName(className)}
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} gap={4}>
          {peopleOfClassAsMdx.map((person) => {
            if (person?.childMdx === undefined) return null;
            const qualifications = person?.childMdx?.body
              .replace("Qualifications:", "")
              .trim();

            return (
              <Box
                key={person?.childMdx.frontmatter.title}
                p={4}
                display="flex"
                flexDirection="column"
                alignItems="center"
                borderRadius="lg"
                textAlign="center"
                boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
                transition="transform 1s ease"
                _hover={{
                  boxShadow: "rgba(149, 157, 165, 0.4) 0px 8px 24px",
                  transform: "translateY(-4px)",
                }}
              >
                <Image
                  src={
                    person?.childMdx?.frontmatter.featuredImage.childImageSharp
                      .gatsbyImageData.images.fallback.src
                  }
                  alt={person?.childMdx?.frontmatter.title}
                  objectFit="cover"
                  borderRadius="lg"
                  mb={4}
                  width="100%"
                  height="200px"
                />
                <Heading as="h3" size="md" mb={2} top={0}>
                  {person?.childMdx?.frontmatter.title}
                </Heading>
                <Box justifyContent={"top"} textAlign={"left"}>
                  <UnorderedList>
                    {qualifications.split("\n").map((item, index) => (
                      <ListItem key={index} fontSize="sm">
                        {item.trim().replace("-", "")}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    );
  };

  return (
    <>
      <Header />
      <Box maxW="800px" mx="auto" px={8} py={8}>
        <Container maxW="container.lg" mt={8}>
          <Heading
            as="h1"
            size="xl"
            mb={8}
            fontWeight="bold"
            fontSize={{ base: "3xl", md: "4xl" }}
            textAlign="center"
          >
            Members
          </Heading>
          {Object.keys(classData).map((className) =>
            renderPeopleByClass(className)
          )}
        </Container>
      </Box>
    </>
  );
};

export default PeopleSummary;
