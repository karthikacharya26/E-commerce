import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();



  return (
    <Box>
      <Heading>Welcome Home</Heading>
      <Button onClick={()=>navigate('/products')}>View Products</Button>
    </Box>
  );
};

export default Home;
