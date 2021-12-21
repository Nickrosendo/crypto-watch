import useSwr from "swr";

import React from "react";
import { Spinner } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { CoinsList } from "../components";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Home: React.FC = () => {
  const { data: coins, error } = useSwr("/api/coins", fetcher);
  if (error) return <div>Failed to load users</div>;

  if (!coins)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="brand.500"
        size="xl"
      />
    );

  console.log("coins: ", coins);
  return (
    <div className={styles.container}>
      <Head>
        <title>CryptoWatch</title>
        <meta name="description" content="CryptoCurrencies price" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CoinsList coins={coins} />
    </div>
  );
};

export default Home;
