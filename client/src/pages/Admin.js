import {
  Box,
  Button,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as React from "react";
import { addNewProduct } from "../services";
import { useHistory } from "react-router-dom";

export function Admin() {
  const formRef = React.useRef();
  const { register, formState, handleSubmit } = useForm({
    mode: "all",
    shouldFocusError: true,
  });
  const [addProductLoading, setAddProductLoading] = React.useState(false);
  const toast = useToast();

  async function saveProduct(data) {
    try {
      const {
        productName,
        description,
        price,
        typeOfFabric,
        fabricNickName,
        colourOfLinen,
        yard,
        itemsInStock,
        typeOfTextile,
        productImage,
      } = data;
      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("typeOfFabric", typeOfFabric);
      formData.append("fabricNickName", fabricNickName);
      formData.append("colourOfLinen", colourOfLinen);
      formData.append("yard", yard);
      formData.append("itemsInStock", itemsInStock);
      formData.append("typeOfTextile", typeOfTextile);
      formData.append("productImage", productImage[0]);

      setAddProductLoading(true);
      const newProduct = await addNewProduct(formData);

      if (newProduct) {
        setAddProductLoading(false);
        toast({
          description: "Product added successfully",
          isClosable: true,
          status: "success",
          position: "top",
        });

        formRef.current.reset();
      }
    } catch (e) {
      toast({
        description: "Could not add new product due to an  error",
        isClosable: true,
        status: "error",
        position: "top",
      });
    } finally {
      setAddProductLoading(false);
    }
  }
  return (
    <Box p="2rem">
      <Heading my="1rem">Add Product</Heading>
      <form
        ref={formRef}
        onSubmit={handleSubmit(saveProduct)}
        encType="multipart/form-data"
      >
        <Stack spacing="1rem">
          <Box>
            <label htmlFor="productName">Name of fabric</label>
            <Input
              {...register("productName", {
                required: {
                  value: true,
                  message: "Please enter a fabric name",
                },
              })}
              type="text"
              id="productName"
            />
            {formState.errors.productName && (
              <Text color="red.500" fontSize="0.9rem">
                <i>{formState.errors.productName.message}</i>
              </Text>
            )}
          </Box>

          <Box>
            <label htmlFor="description">Description</label>
            <Textarea
              {...register("description", {
                required: {
                  value: true,
                  message: "Please enter a description",
                },
              })}
              id="description"
            ></Textarea>
            {formState.errors.description && (
              <Text color="red.500" fontSize="0.9rem">
                <i>{formState.errors.description.message}</i>
              </Text>
            )}
          </Box>

          <Box>
            <label htmlFor="price">Price</label>
            <Input
              {...register("price", {
                required: { value: true, message: "Please enter a price" },
              })}
              type="number"
              id="price"
            />
            {formState.errors.price && (
              <Text color="red.500" fontSize="0.9rem">
                <i>{formState.errors.price.message}</i>
              </Text>
            )}
          </Box>
          <Box>
            <label htmlFor="typeOfFabric">Type of fabric</label>
            <Select {...register("typeOfFabric")} id="typeOfFabric">
              <option>Plain fabric</option>
              <option>African wax print</option>
              <option>Lace</option>
            </Select>
          </Box>
          <Box>
            <label htmlFor="fabricNickName">Fabric nick name</label>
            <Input {...register("fabricNickName")} id="fabricNickName" />
          </Box>
          <Box>
            <label htmlFor="colourOfLinen">Colour of linen</label>
            <Input
              {...register("colourOfLinen", {
                required: { value: true, message: "Please enter the colour" },
              })}
              id="colourOfLinen"
            />
            {formState.errors.colourOfLinen && (
              <Text color="red.500" fontSize="0.9rem">
                <i>{formState.errors.colourOfLinen.message}</i>
              </Text>
            )}
          </Box>
          <Box>
            <label htmlFor="yard">Number of yards</label>
            <Input
              {...register("yard", {
                required: {
                  value: true,
                  message: "Please enter the number of yards",
                },
                minLength: {
                  value: 1,
                  message: "Number of yards cannot be less than 1",
                },
              })}
              type="number"
            />
            {formState.errors.yard && (
              <Text color="red.500" fontSize="0.9rem">
                <i>{formState.errors.yard.message}</i>
              </Text>
            )}
          </Box>
          <Box>
            <label htmlFor="itemsInStock">Items in stock</label>
            <Input
              {...register("itemsInStock", {
                required: true,
                message: "Please enter the number of items in stock",
              })}
              type="number"
              id="itemsInStock"
            />

            {formState.errors.itemsInStock && (
              <Text color="red.500" fontSize="0.9rem">
                <i>{formState.errors.itemsInStock.message}</i>
              </Text>
            )}
          </Box>
          <Box>
            <label htmlFor="typeOfTextile">Type of textile</label>
            <Input
              {...register("typeOfTextile", {
                required: {
                  value: true,
                  message: "Please enter the type of textile",
                },
              })}
              type="text"
              id="typeOfTextile"
            />
            {formState.errors.typeOfTextile && (
              <Text color="red.500" fontSize="0.9rem">
                <i>{formState.errors.typeOfTextile.message}</i>
              </Text>
            )}
          </Box>

          <Box>
            <label htmlFor="productImage">Image</label>
            <Input
              {...register("productImage", {
                required: { value: true, message: "Please upload an image" },
              })}
              id="productImage"
              type="file"
              name="productImage"
            />
          </Box>

          <Box>
            <Button
              isLoading={addProductLoading}
              disabled={
                !formState.isDirty || !formState.isValid | addProductLoading
              }
              type="submit"
              colorScheme="green"
              loadingText="adding new product..."
            >
              Add product
            </Button>
          </Box>
        </Stack>
      </form>
    </Box>
  );
}
