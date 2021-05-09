import * as React from "react";
import {
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Flex,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import { CartContext } from "../context/CartContext";

export function Cart() {
  const [cart] = React.useContext(CartContext);

  const numOfItemsInCart = React.useMemo(() => {
    if (cart) {
      return cart.itemsBought.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0);
    }
  }, [cart]);

  async function removeItemFromCart(productId) {
    const filterItemsBought = cart.itemsBought.filter((item) => {
      return item.productId._id === productId;
    });

    console.log(filterItemsBought);
  }

  return (
    <>
      {!numOfItemsInCart || numOfItemsInCart == 0 ? (
        <Flex w="100%" h="100vh" align="center" justify="center">
          <Box>
            <Text textAlign="center" fontSize="5rem">
              😥
            </Text>

            <Text textAlign="center">No items in cart. Add new items</Text>
          </Box>
        </Flex>
      ) : (
        <>
          <Table variant="simple" mr="1rem">
            <TableCaption>Cart</TableCaption>
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Image</Th>
                <Th>Name</Th>
                <Th>Price</Th>
                <Th>Quantity</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cart.itemsBought.map(
                (
                  {
                    productId: { _id, productName, imagePath, price },
                    quantity,
                  },
                  i
                ) => (
                  <Tr key={`row-${i}`}>
                    <Td>{`${i + 1}`}</Td>
                    <Td w="2rem" h="2rem">
                      <img
                        src={`${process.env.REACT_APP_BACKEND_URL}/${imagePath}`}
                        alt={`${productName} image`}
                      />
                    </Td>
                    <Td>{productName}</Td>
                    <Td isNumeric>{price}</Td>
                    <Td isNumeric>{quantity}</Td>
                    <Td isNumeric>
                      <Button onClick={() => removeItemFromCart(_id)} size="xs">
                        Remove
                      </Button>
                    </Td>
                  </Tr>
                )
              )}
            </Tbody>
          </Table>

          {cart && (
            <>
              <Table variant="simple" mr="1rem">
                <TableCaption>Checkout summary</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Total items</Th>
                    <Th>Amount(GH&#8373;)</Th>
                    <Th>Total amount with shipping cost(GH&#8373;)</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td isNumeric>{cart.totalOfCloth}</Td>
                    <Td isNumeric>{cart.shippingCost}</Td>
                    <Td isNumeric>{cart.shippingPlusClothTotalCost}</Td>
                  </Tr>
                </Tbody>
              </Table>

              <Button colorScheme="green" size="lg" w="100%">
                Checkout
              </Button>
            </>
          )}
        </>
      )}
    </>
  );
}
