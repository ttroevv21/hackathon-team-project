import React, { useContext, useEffect } from "react";
import { ClientContext } from "../contexts/ClientProvider";
import FilmCard from "./FilmCard";
import Loading from "./Loading";
import { Grid } from "@mui/material";

const AllProducts = () => {
  const { getProducts, products } = useContext(ClientContext);

  useEffect(() => {
    getProducts();
  }, []);

  if (!products) {
    return <Loading />;
  }

  return (
    <div>
      <h1>ALL PRODUCTS</h1>
      <div>
        <Grid container spacing={5}>
          {products.map((item) => (
            <Grid key={item.id} item xs={12} sm={12} md={6}>
              <FilmCard movie={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default AllProducts;
