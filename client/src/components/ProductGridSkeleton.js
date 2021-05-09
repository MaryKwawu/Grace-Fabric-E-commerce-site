import * as React from "react";
import { SimpleGrid, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

export const ProductGridSkeleton = () => (
  <SimpleGrid columns={[1, null, 3]} spacing="40px">
    {new Array(8).fill("skeleton").map((e, i) => (
      <Stack border="1px solid #eee">
        <Skeleton h="20rem" w="20rem"></Skeleton>
        <Stack p={"1rem"}>
          <SkeletonText mt="4" noOfLines={3} spacing="4" />
        </Stack>
        <Skeleton borderRadius="5px" h="3rem" w="100%"></Skeleton>
      </Stack>
    ))}
  </SimpleGrid>
);
