import { Box, Button, Heading, VStack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="gray.50"
      p={5}
    >
      <VStack spacing={6} textAlign="center">
        <Heading as="h1" size="2xl" color="purple.700">
          Welcome Home
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Discover our amazing products by clicking the button below.
        </Text>
        <Button
          onClick={() => navigate('/products')}
          colorScheme="purple"
          size="lg"
          px={8}
          py={6}
        >
          View Products
        </Button>
      </VStack>
    </Box>
  );
};

export default Home;
