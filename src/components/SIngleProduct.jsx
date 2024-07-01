import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ADD_TO_CART } from "../redux/actionTypes/cartAction";

const SingleProduct = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.product.data.find((p) => p.id === parseInt(id))
  );
  const dispatch = useDispatch();
  const toast = useToast();

  const handleAdd = () => {
    dispatch({ type: ADD_TO_CART, payload: product });
    toast({
      title: "Item added to cart",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  if (!product) return <Heading>Product not found</Heading>;

  return (
    <Flex justifyContent="center" mt={5} p={5}>
      <Box
        display={{ base: "block", md: "flex" }}
        gap={10}
        shadow="xl"
        p={5}
        w={{ base: "100%", md: "80%" }}
        borderRadius="xl"
        justifyContent="center"
        alignItems="center"
      >
        <Box mb={{ base: 5, md: 0 }} w={{ base: "80%", md: "auto" }} mx="auto">
          <Image src={product.image} width={{ base: "100%", md: "320px" }} />
        </Box>
        <Box textAlign={{ base: "center", md: "left" }} w={{ base: "80%", md: "auto" }} mx="auto">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            {product.title}
          </Text>
          <Text mb={4}>{product.description}</Text>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Price: ${product.price}
          </Text>
          <Button onClick={handleAdd} size="lg" w="200px">
            Add to cart
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default SingleProduct;
