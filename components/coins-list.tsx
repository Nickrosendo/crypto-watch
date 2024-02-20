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
  Avatar,
} from "@chakra-ui/react";
import { FaMoneyBill } from "react-icons/fa";

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
      gridAutoRows="11.5rem"
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
          minW="11.5rem"
        >
          {coin.image ? (<Image src={coin.image} alt={`${coin.id} coin image`} w="3rem" h="3rem" />) : <Avatar size="md" icon={<FaMoneyBill />} />}
          <Stat mt="1">
            <StatLabel>{coin.name}</StatLabel>
            <StatNumber>
              {coin.currency} {coin.price}
            </StatNumber>
          </Stat>
        </Flex>
      ))}
    </Grid>
  );
};
