import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actionTypes/authAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = ()=>{
    dispatch(login(email, password))
    navigate('/products')
  }

  return (
    <Flex justifyContent={"center"}>
      <FormControl
        width={"40%"}
        border={"1px solid"}
        p={10}
        borderRadius={"xl"}
        mt={10}
      >
        <FormLabel>Email</FormLabel>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormLabel>Password</FormLabel>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> 
        <Button onClick={handleSubmit} mt={5}>Submit</Button>
      </FormControl>
    </Flex>
  );
};

export default Login;
