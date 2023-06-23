import type { HeadFC, PageProps } from "gatsby";
import {
  useColorMode,
  Code,
  CodeProps,
  Link as ChakraLink,
} from "@chakra-ui/react";

import React, { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import { Cylinder as Cylinder3D, OrbitControls } from "@react-three/drei";

import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "gatsby";
import Header from "../components/Header";
import RobotLoader from "../components/robotloader";

const IndexPage: React.FC<PageProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    // init dark mode
    console.log(colorMode);
    if (colorMode === "light") {
      toggleColorMode();
      console.log("dark mode");
    }
  }, []);

  return (
    <Box h="100vh" overflow="hidden">
      <Header isMain={true} />
      <Canvas
        style={{
          background: "black",
          display: "block",
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
        }}
        camera={{ position: [0.5, 2.5, 0.5] }}
      >
        <Suspense fallback={null}>
          <RobotLoader url="raibot/urdf/raibot.urdf" />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <Flex
        direction="column"
        align="center"
        justify="center"
        top="0"
        w="100%"
        h="60%"
        p={8}
        style={{ position: "absolute", pointerEvents: "none" }}
      >
        <Heading as="h1" size="2xl" mb={8} color="white">
          RAILAB
        </Heading>
        <Text fontSize="xl" mb={8} color="white">
          We are innovating for the future, join us to make a difference in the
          world.
        </Text>
      </Flex>
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
