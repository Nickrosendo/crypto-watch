import React from "react";
import { Container, Skeleton } from "@chakra-ui/react";

import { CoinsListSkeleton, Header, SearchBar } from "@root/components";

export const CoinsListLoading = () => {
  return (
    <Container maxW="container.lg" centerContent>
      <Header />
      <Skeleton>
        <SearchBar />
      </Skeleton>
      <CoinsListSkeleton />
    </Container>
  );
};
