import React from "react";
import { Container } from "@mui/material";
import ProductsPagination from "../components/ProductsPagination";
import AllProducts from "../components/AllProducts";

const HomePage = () => {
  return (
    <div>
      <h2>HOME PAGE</h2>
      <Container>
        <AllProducts />
        <ProductsPagination />
      </Container>
    </div>
  );
};

export default HomePage;
