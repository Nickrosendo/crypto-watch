import React from "react";
import { Container, Skeleton } from "@chakra-ui/react";

import { CoinsListSkeleton, Header, SearchBar } from "@root/components";
import styles from "@root/styles/Home.module.css";

export const CoinsListLoading = () => {
  return (
    <div className={styles.container}>
      <Container maxW="container.lg" centerContent>
        <Header />
        <Skeleton>
          <SearchBar />
        </Skeleton>
        <CoinsListSkeleton />
      </Container>
    </div>
  );
};
