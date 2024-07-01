import { Box, Button, Grid, Heading, Image, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actionTypes/productAction";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const data = useSelector((state) => state.product.data);
  const isLoading = useSelector((state) => state.product.isLoading);
  const isError = useSelector((state) => state.product.isError);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/products/${id}`);
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }

  if (isError) {
    return <Heading>Error occurred</Heading>;
  }

  return (
    <Box p={5}>
      <Grid
        templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        gap={6}
      >
        {data && data.map((ele) => (
          <Box
            key={ele.id}
            shadow="2xl"
            borderRadius="lg"
            p={5}
            textAlign="center"
          >
            <Box>
              <Image width="100%" height="auto" src={ele.image} />
            </Box>
            <Text mt={4}>{ele.title}</Text>
            <Button mt={3} onClick={() => handleView(ele.id)}>View</Button>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
