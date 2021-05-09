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
  useToast,
} from "@chakra-ui/react";
import { CartContext } from "../context/CartContext";
import { updateCart } from "../services";
import { UserContext } from "../context/UserContext";

export function Cart() {
  const [cart, setCart] = React.useContext(CartContext);
  const [user] = React.useContext(UserContext);
  const toast = useToast();

  const numOfItemsInCart = React.useMemo(() => {
    if (cart) {
      return cart.itemsBought.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0);
    }
  }, [cart]);

  async function removeItemFromCart(productId) {
    console.log(cart);
    const itemsWithoutRemovedItem = cart.itemsBought.filter((item) => {
      if (item.productId._id) {
        return item.productId._id !== productId;
      }
      return item.productId !== productId;
    });

    console.log(itemsWithoutRemovedItem.length);

    const payload = {
      userId: user._id,
      itemsBought: itemsWithoutRemovedItem,
      // totalOfCloth: cart.totalOfCloth - 1,      TODO: These calculations will be wrong in the real world. These numbers should be computed
      // shippingCost: cart.shippingCost + price,
      // shippingPlusClothTotalCost: cart.shippingPlusClothTotalCost + price + 10,
    };

    const updatedCart = await updateCart(user._id, payload);
    if (updatedCart) {
      toast({
        position: "top",
        status: "success",
        description: "Item removed from cart successfully!",
        isClosable: true,
      });

      setCart(updatedCart.data.cart);
      window.localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart.data.cart)
      );
    }
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
