import { Flex, Box, IconButton, useDisclosure, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Flex 
        justifyContent="space-between" 
        alignItems="center" 
        py={4} 
        px={6} 
        bgColor={"gray.400"}
      >
        <Box fontWeight="bold" fontSize="lg">
          <Link to={"/"}>Shop</Link>
        </Box>
        <Box display={{ base: "none", md: "flex" }} gap={10}>
          <Link to={"/"}>Home</Link>
          <Link to={"/products"}>Products</Link>
          <Link to={"/cart"}>Cart</Link>
          <Link to={"/login"}>Login</Link>
        </Box>
        <IconButton
          display={{ base: "block", md: "none" }}
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
        />
      </Flex>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex direction="column" mt={8} gap={4}>
              <Link to={"/"} onClick={onClose}>Home</Link>
              <Link to={"/products"} onClick={onClose}>Products</Link>
              <Link to={"/cart"} onClick={onClose}>Cart</Link>
              <Link to={"/login"} onClick={onClose}>Login</Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
