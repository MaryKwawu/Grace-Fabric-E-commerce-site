import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Collections.css";
import { getProducts } from "../services";
import { Box, chakra, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { ProductCard } from "../components/ProductCard";
import { ProductGridSkeleton } from "../components/ProductGridSkeleton";

const slideImages = [
  "/collections/my.jpg",
  "/collections/yk.jpg",
  "/collections/fp.jpg",
  "/collections/fl.jpg",
  "/collections/oo.jpg",
  "/collections/pk.jpg",
  "/collections/fk.jpg",
];

const Collections = () => {
  const [products, setProducts] = React.useState([]);
  const [productsLoading, setProductsLoading] = React.useState(false);
  const [error, setError] = React.useState();

  React.useEffect(() => {
    setProductsLoading(true);
    getProducts()
      .then(({ data: { product } }) => {
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
      <Box h="500px" w="100%">
        <Fade arrows={false}>
          {slideImages.map((each, index) => (
            <div key={`slide-${index}`} className="each-slide">
              <div style={{ backgroundImage: `url(${each})` }}></div>
            </div>
          ))}
        </Fade>
      </Box>
      <Box mt="2rem">
        {productsLoading ? <ProductGridSkeleton /> : productGrid}
      </Box>
    </Box>
  );
};
export default Collections;
