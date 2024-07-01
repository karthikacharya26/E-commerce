import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex gap={10} py={8} bgColor={"gray.400"} pl={'50px'}>
      <Link to={"/"}>Home</Link>
      <Link to={"/products"}>Products</Link>
      <Link to={"/products/:id"}>Single Product</Link>
      <Link to={"/cart"}>Cart</Link>
      <Link to={"/login"}>Login</Link>
    </Flex>
  );
};

export default Navbar;
