import React from "react";
import {
  Flex,
  Grid,
  Image,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";

export interface CoinItem {
  id: string;
  image: string;
  price: number;
  currency: string;
  name: string;
}

export interface CoinsListProps {
  coins: CoinItem[];
}

export const CoinsList: React.FC<CoinsListProps> = ({ coins = [] }) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6} my="4">
      {coins.map((coin) => (
        <Flex
          key={coin.id}
          maxW="sm"
          borderWidth=".25rem"
          borderRadius="md"
          overflow="hidden"
          textAlign="center"
          flexDir="column"
          alignItems="center"
          justifyItems="center"
          padding="4"
        >
          <Image src={coin.image} alt={`${coin.id} coin image`} w="50" h="50" />
          <Stat mt="1">
            <StatLabel>{coin.name}</StatLabel>
            <StatNumber>$ {coin.price}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              23.36%
            </StatHelpText>
          </Stat>
        </Flex>
      ))}
    </Grid>
  );
};
