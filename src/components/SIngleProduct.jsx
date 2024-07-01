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

const SIngleProduct = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.product.data.find((p) => p.id === parseInt(id))
  );
  const dispatch = useDispatch();
  const toast = useToast();

  const handleAdd = () => {
    dispatch({ type: ADD_TO_CART, payload: product });
    toast({
      title: "Item added successfully to the cart",
      status: "success",
      isClosable: true,
    });
  };

  if (!product) return <Heading>Product not found</Heading>;

  return (
    <Flex justifyContent={"center"} mt={5}>
      <Box
        display={"flex"}
        gap={10}
        shadow={"xl"}
        p={5}
        w={"80%"}
        borderRadius={"xl"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box>
          <Image src={product?.image} width={"320px"} />
        </Box>
        <Text>{product?.title}</Text>
        <Text>{product?.description}</Text>
        <Text>Price: ${product?.price}</Text>
        <Button onClick={handleAdd} size={"lg"} w={"200px"}>
          Add to cart
        </Button>
      </Box>
    </Flex>
  );
};

export default SIngleProduct;
