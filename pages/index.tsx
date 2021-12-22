import React from "react";
import useSwr from "swr";
import { Container, Alert, AlertIcon } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import {
  CoinsList,
  Header,
  SearchBar,
  ThemeContainer,
  CoinsListLoading,
} from "@root/components";

const fetcher = (url) => fetch(url).then((res) => res.json());

export interface HomeProps {
  cookies?: string;
}

const Home: React.FC<HomeProps> = ({ cookies = "" }) => {
  const { data: coins, error } = useSwr("/api/coins", fetcher);
  const [search, setSearch] = React.useState("");

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        There was an error processing your request, try again in a minute.
      </Alert>
    );
  }

  if (!coins)
    return (
      <ThemeContainer cookies={cookies}>
        <CoinsListLoading />
      </ThemeContainer>
    );

  const handleSearch = (event: Event) => {
    const target = event?.target as HTMLInputElement;
    const searchValue = target?.value;
    if (searchValue) {
      setSearch(searchValue);
    } else {
      setSearch("");
    }
  };
  const filteredCoins =
    (search && coins.filter((coin) => coin.name.indexOf(search) > -1)) || coins;

  return (
    <ThemeContainer cookies={cookies}>
      <div className={styles.container}>
        <Head>
          <title>CryptoWatch</title>
          <meta name="description" content="CryptoCurrencies price" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Container maxW="container.lg" centerContent>
          <Header />
          <SearchBar onSearch={handleSearch} />
          <CoinsList coins={filteredCoins} />
        </Container>
      </div>
    </ThemeContainer>
  );
};

export async function getServerSideProps({ req, locale }) {
  return {
    props: {
      cookies: req.headers.cookie ?? ""
    },
  };
}

export default Home;
