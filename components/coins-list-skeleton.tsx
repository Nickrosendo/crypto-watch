import React from "react";
import {
  Box,
  Flex,
  Grid,
  Image,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

export const CoinsListSkeleton: React.FC = () => {
  const skeletons = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
  ];
  return (
    <Grid
      templateColumns={{
        lg: "repeat(4, 1fr)",
        md: "repeat(3, 1fr)",
        sm: "repeat(2, 1fr)",
        base: "repeat(1, 1fr)",
      }}
      gap={6}
      my="4"
      title="coins-list-skeleton-container"
      gridAutoRows="11.5rem"
    >
      {skeletons.map((skeleton) => (
        <Box
          key={skeleton.id}
          boxShadow="lg"
          borderWidth=".25rem"
          borderRadius="md"
          padding="4"
          title={`${skeleton.id}-skeleton-list-item`}
          maxW="sm"
          minW="11.5rem"
        >
          <SkeletonCircle size="50" margin="0 auto" />
          <SkeletonText mt="4" noOfLines={3} spacing="4" />
        </Box>
      ))}
    </Grid>
  );
};
