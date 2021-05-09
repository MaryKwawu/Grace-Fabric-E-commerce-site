import { ProductCard } from "../components/ProductCard";
import * as React from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import { getProducts } from "../services";
import { ProductGridSkeleton } from "../components/ProductGridSkeleton";

const FabricWall = () => {
  const [products, setProducts] = React.useState([]);
  const [productsLoading, setProductsLoading] = React.useState(false);
  const [error, setError] = React.useState();

  React.useEffect(() => {
    setProductsLoading(true);
    getProducts()
      .then(({ data: { product } }) => {
        console.log(product);

        setProducts(product);

        setProductsLoading(false);
      })
      .catch((e) => setError(e))
      .finally(() => setProductsLoading(false));
  }, []);

  const productGrid = products.length ? (
    <SimpleGrid columns={[1, 1, 2, 3]} spacing="40px">
      {products.map(
        ({
          _id,
          productName,
          price,
          typeOfFabric,
          fabricNickName,
          colourOfLinen,
          imagePath,
        }) => (
          <ProductCard
            key={_id}
            typeOfFabric={typeOfFabric}
            productName={productName}
            colourOfLinen={colourOfLinen}
            fabricNickName={fabricNickName}
            imagePath={imagePath}
            price={price}
            id={_id}
          />
        )
      )}
    </SimpleGrid>
  ) : (
    <Flex w="100%" h="100vh" align="center" justify="center">
      <Box>
        <Text textAlign="center" fontSize="5rem">
          😥
        </Text>

        <Text textAlign="center">
          Sorry, No products available. Check again soon.
        </Text>
      </Box>
    </Flex>
  );

  return (
    <Box p="5rem">
      {productsLoading ? <ProductGridSkeleton /> : productGrid}
    </Box>
  );
};

export default FabricWall;
