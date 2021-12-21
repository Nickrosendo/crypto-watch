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

export interface CoinUpdate {
  type: "increase" | "decrease";
  percentage: number;
}

export interface CoinItem {
  id: string;
  image: string;
  price: number;
  currency: string;
  update: CoinUpdate;
  name: string;
}

export interface CoinsListProps {
  coins: CoinItem[];
}

export const CoinsList: React.FC<CoinsListProps> = ({ coins = [] }) => {
  return (
    <Grid
      templateColumns={{
        lg: 'repeat(4, 1fr)',
        md: 'repeat(3, 1fr)',
        sm: 'repeat(2, 1fr)',
        base: 'repeat(1, 1fr)',
      }}
      gap={6}
      my="4"
      title="coins-list-container"
    >
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
          title={`${coin.id}-coin-list-item`}
        >
          <Image src={coin.image} alt={`${coin.id} coin image`} w="50" h="50" />
          <Stat mt="1">
            <StatLabel>{coin.name}</StatLabel>
            <StatNumber>
              {coin.currency} {coin.price}
            </StatNumber>
            <StatHelpText>
              <StatArrow type={coin.update.type} />
              {coin.update.percentage} %
            </StatHelpText>
          </Stat>
        </Flex>
      ))}
    </Grid>
  );
};
