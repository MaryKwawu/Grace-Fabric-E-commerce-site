import * as React from "react";
import {
  Box,
  Button,
  Text,
  Flex,
  useToast,
  AlertDialogContent,
  Progress,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/all";
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { createCart } from "../services";

export function ProductCard({
  id,
  productName,
  price,
  typeOfFabric,
  fabricNickName,
  colourOfLinen,
  imagePath,
}) {
  const [user] = React.useContext(UserContext);
  const [cart, setCart] = React.useContext(CartContext);
  const router = useHistory();
  const toast = useToast();

  const [firstTimeCart, setFirstTimeCart] = React.useState(false);
  const [fistTimeCartProgress, setFirstTimeCartProgress] = React.useState(0);

  async function addToCart({ productId, price }) {
    // Where user is not logged in
    if (!user) {
      toast({
        position: "top",
        status: "info",
        description: "You must be logged in to perform this action",
        isClosable: true,
      });

      router.push("/login");
    }

    // Where user has no cart
    if (!cart) {
      const payload = {
        userId: user._id,
        itemsBought: [{ productId, quantity: 1 }],
        totalOfCloth: 1,
        shippingCost: price,
        shippingPlusClothTotalCost: price + 10,
      };

      try {
        setFirstTimeCart(true);

        const cart = await createCart(payload);
        setFirstTimeCartProgress(50);

        if (cart) {
          setFirstTimeCartProgress(100);
          setFirstTimeCart(false);
          toast({
            position: "top",
            status: "success",
            description: "Item added to cart successfully!",
            isClosable: true,
          });

          setCart(cart.data);

          window.localStorage.setItem("cart", JSON.stringify(cart.data));
        }
      } catch (e) {
        toast({
          position: "top",
          status: "error",
          description: "Could not create new card due to an error",
          isClosable: true,
        });

        console.log(e);
      } finally {
        setFirstTimeCart(false);
      }
    }
  }

  const NewCartDialog = () => (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        isOpen={firstTimeCart}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Adding item to cart...</AlertDialogHeader>

          <AlertDialogBody>
            Creating new cart for first time buyer
          </AlertDialogBody>
          <AlertDialogFooter>
            <Progress
              hasStripe
              isAnimated={true}
              value={fistTimeCartProgress}
              size="xs"
              colorScheme="green"
            />
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
  return (
    <>
      <NewCartDialog />
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
            onClick={() => addToCart({ productId: id, price })}
          >
            Add to cart
          </Button>
        </Box>
      </Box>
    </>
  );
}
