import useSwr from "swr";

import React from "react";
import { Spinner, Container } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { CoinsList } from "../components";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Home: React.FC = () => {
  const { data: coins, error } = useSwr("/api/coins", fetcher);
  if (error) return <div>Failed to load coins</div>;

  if (!coins)
    return (
      <Container maxW="container.lg" centerContent >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="brand.500"
          size="xl"
        />
      </Container>
    );

  console.log("coins: ", coins);
  return (
    <div className={styles.container}>
      <Head>
        <title>CryptoWatch</title>
        <meta name="description" content="CryptoCurrencies price" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="container.lg" centerContent>
        <CoinsList coins={coins} />
      </Container>
    </div>
  );
};

export default Home;
