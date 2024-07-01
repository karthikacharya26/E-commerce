import { Heading } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  // const isAuth = useSelector((state) => state.auth.isAuth);
  const isAuth = true

  if (isAuth) {
    return children;
  }

  return <Heading>Kindly Login</Heading>;
};

export default PrivateRoute;
