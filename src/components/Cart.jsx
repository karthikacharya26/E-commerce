import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  updataQuantity,
} from "../redux/actionTypes/cartAction";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (items.length === 0) return <Heading>No items in cart</Heading>;

  return (
    <Flex justifyContent={"space-around"}>
      <Box>
        {items.map((ele) => (
          <Flex
            key={ele.id}
            w={"800px"}
            shadow={"xl"}
            mt={10}
            p={10}
            gap={10}
            alignItems={"center"}
          >
            <Box>
              <Image src={ele.image} width="200px" />
            </Box>
            <Box>
              <Text>Title: {ele.title}</Text>
              <Text>{ele.description}</Text>
              <Text mt={10}>Price: ${ele.price}</Text>
              <Flex mt={10} alignItems={"center"} gap={2}>
                <Text>Quantity: {ele.quantity}</Text>

                <Button
                  size={"sm"}
                  ml={5}
                  onClick={() =>
                    dispatch(updataQuantity(ele.id, ele.quantity - 1))
                  }
                >
                  -
                </Button>

                <Button
                  size={"sm"}
                  onClick={() =>
                    dispatch(updataQuantity(ele.id, ele.quantity + 1))
                  }
                >
                  +
                </Button>
              </Flex>
              <Button
                size={"sm"}
                ml={2}
                mt={5}
                onClick={() => handleRemove(ele.id)}
              >
                Remove from cart
              </Button>
            </Box>
          </Flex>
        ))}
      </Box>

      <Flex
        shadow={"2xl"}
        w={"400px"}
        mt={10}
        p={10}
        gap={10}
        alignItems={"center"}
        h={"200px"}
      >
        <Box>
          <Heading>Cart Total</Heading>
          <Text fontWeight={"bold"} mt={10}>
            Amount: ${totalAmount.toFixed(2)}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Cart;
