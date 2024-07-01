import { Box, Button, Grid, Heading, Image, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actionTypes/productAction";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const data = useSelector((state) => state.product.data);
  const isLoading = useSelector((state) => state.product.isLoading);
  const isError = useSelector((state) => state.product.isError);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleView = (id)=>{
    navigate(`/products/${id}`)
  }


  useEffect(()=>{
    dispatch(fetchData())
  }, [])

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
    return <Heading>Error occured</Heading>;
  }

  return <Box>
    <Grid templateColumns={'repeat(4, 1fr)'} gap={10} p={10}>
        {data && data.map((ele)=>(
            <Box shadow={'2xl'} borderRadius={'lg'} p={10} textAlign={'center'} key={ele.id}>
                <Box >
                    <Image width={'210px'} src={ele.image} />
                </Box>
                <Text mt={10}>{ele.title}</Text>
                <Button mt={5} onClick={()=>handleView(ele.id)}>View</Button>
            </Box>
        ))}
    </Grid>
  </Box>;
};

export default Products;
