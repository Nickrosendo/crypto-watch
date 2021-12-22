import React from "react";
import { Container, Box, HStack, useColorMode } from "@chakra-ui/react";

import {
  SearchBar,
  GithubBtn,
  LinkedinBtn,
  BuyMeACoffeBtn,
  ColorModeToggle,
} from "@root/components";

export const Header: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Container maxW="container.lg" centerContent title="header">
      <Box w="100%" h="60px" p={2} mb="3rem" role="heading">
        <HStack spacing={2} align="center" justifyContent="center" h="100%">
          <GithubBtn />
          <LinkedinBtn />
          <ColorModeToggle colorMode={colorMode} />
          <BuyMeACoffeBtn />
        </HStack>
      </Box>
    </Container>
  );
};
