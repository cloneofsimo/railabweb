import React from "react";
import { Link } from "gatsby";
import {
  Box,
  Flex,
  IconButton,
  Tooltip,
  useColorMode,
  VStack,
  HStack,
  useMediaQuery,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Center,
  AbsoluteCenter,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiHome,
  FiBookOpen,
  FiUsers,
  FiFileText,
  FiSearch,
  FiSun,
  FiMoon,
  FiGlobe,
  FiZap,
  FiTerminal,
  FiCompass,
} from "react-icons/fi";

import { FaMicroscope, FaRobot, FaSearch } from "react-icons/fa";

const Header = ({ isMain = false }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleToggleColorMode = () => {
    if (isMain) return;
    toggleColorMode();
  };

  const NavItems = () => (
    <>
      <Tooltip label="Home">
        <Link to="/">
          <IconButton
            icon={<FiHome />}
            aria-label="Home"
            size="md"
            variant="ghost"
          />
        </Link>
      </Tooltip>

      <Tooltip label="Members">
        <Link to="/members">
          <IconButton
            icon={<FiUsers />}
            aria-label="Members"
            size="md"
            variant="ghost"
          />
        </Link>
      </Tooltip>
      <Tooltip label="Robots">
        <Link to="/robots">
          <IconButton
            icon={<FaRobot />}
            aria-label="Robots"
            size="md"
            variant="ghost"
          />
        </Link>
      </Tooltip>
      <Tooltip label="Research">
        <Link to="/research">
          <IconButton
            icon={<FaMicroscope />}
            aria-label="Research"
            size="md"
            variant="ghost"
          />
        </Link>
      </Tooltip>
      <Tooltip label="Software">
        <Link to="/software">
          <IconButton
            icon={<FiTerminal />}
            aria-label="Software"
            size="md"
            variant="ghost"
          />
        </Link>
      </Tooltip>
      <Tooltip label="News">
        <Link to="/news">
          <IconButton
            icon={<FiGlobe />}
            aria-label="News"
            size="md"
            variant="ghost"
          />
        </Link>
      </Tooltip>
      <Tooltip label="Publications">
        <Link to="/publications">
          <IconButton
            icon={<FiFileText />}
            aria-label="Publications"
            size="md"
            variant="ghost"
          />
        </Link>
      </Tooltip>

      <Tooltip label="Open Position">
        <Link to="/open-position">
          <IconButton
            icon={<FiCompass />}
            aria-label="Open Position"
            size="md"
            variant="ghost"
          />
        </Link>
      </Tooltip>
      <Tooltip label="Education">
        <Link to="/education">
          <IconButton
            icon={<FiBookOpen />}
            aria-label="Education"
            size="md"
            variant="ghost"
          />
        </Link>
      </Tooltip>
    </>
  );

  return (
    <Flex
      as="header"
      justify="space-between"
      padding={4}
      bg={isDarkMode || isMain ? "rgba(0,0,0,0.0)" : "rgba(0,80,80,1.0)"}
      align="center"
      style={{ position: "sticky", top: 0, zIndex: 10 }}
    >
      {isLargerThan768 ? (
        <Center>
          <AbsoluteCenter>
            <Flex align="center">{<NavItems />}</Flex>
          </AbsoluteCenter>
        </Center>
      ) : (
        <>
          <IconButton
            icon={<FiMenu />}
            aria-label="Menu"
            size="md"
            onClick={onOpen}
          />

          <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <VStack spacing={2} align="center">
                {<NavItems />}
              </VStack>
            </DrawerContent>
          </Drawer>
        </>
      )}

      <IconButton
        icon={isDarkMode ? <FiSun /> : <FiMoon />}
        aria-label="Toggle Dark Mode"
        size="md"
        onClick={handleToggleColorMode}
      />
    </Flex>
  );
};

export default Header;
