import { Box, Button, Text, Flex } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/all";

export function ProductCard({
  productName,
  price,
  typeOfFabric,
  fabricNickName,
  colourOfLinen,
  imagePath,
}) {
  return (
    <Box
      shadow="xl"
      border="1px solid #eee"
      borderTopLeftRadius="5px"
      borderTopRightRadius="5px"
    >
      <Box h="20rem" w="20rem">
        <img
          style={{ height: "100%", width: "100%", borderRadius: "5px 5px" }}
          src={`${process.env.REACT_APP_BACKEND_URL}/${imagePath}`}
        />
      </Box>
      <Box p="1rem">
        <Flex justify="space-between">
          <Text fontSize="1.5rem">{productName}</Text>
          <Text color="#6b7280">GH&#8373; {price}</Text>
        </Flex>
        <Flex justify="space-between">
          <Text fontStyle="italic" fontSize="0.9rem">
            {fabricNickName}
          </Text>
          <Box
            w="1rem"
            h="1rem"
            borderRadius="2px"
            bg={colourOfLinen.toLowerCase()}
          ></Box>
        </Flex>
        <Text fontSize="0.8rem">{typeOfFabric}</Text>
      </Box>
      <Box>
        <Button
          size="lg"
          w="100%"
          colorScheme="green"
          rightIcon={<FaCartPlus />}
        >
          Add to cart
        </Button>
      </Box>
    </Box>
  );
}
