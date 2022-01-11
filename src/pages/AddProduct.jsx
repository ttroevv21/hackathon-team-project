import React, { useState, useContext } from "react";
import { AdminContext } from "../contexts/AdminProvider";
import { Container, TextField } from "@mui/material";
import { Button } from "react-bootstrap";

const AddProduct = () => {
  const [newProduct, setnewProduct] = useState({
    name: "",
    description: "",
    mark: "",
    actors: "",
    year: "",
    price: "",
    image: "",
  });

  const { addProduct } = useContext(AdminContext);

  function handleInput(event) {
    let obj = {
      ...newProduct,
      [event.target.name]: event.target.value,
    };
    setnewProduct(obj);
  }

  function handleSubmit(event) {
    event.preventDefault();
    for (let key in newProduct) {
      if (!newProduct[key].trim()) {
        alert("Fields required!");
        return;
      }
    }
    addProduct(newProduct);
    setnewProduct({
      name: "",
      description: "",
      mark: "",
      actors: "",
      year: "",
      price: 0,
      image: "",
    });
  }

  return (
    <div className="add-product">
      <Container>
        <h2>ADD PRODUCT</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={handleInput}
            fullWidth
            value={newProduct.name}
            name="name"
            label="Name"
            variant="outlined"
          />
          <TextField
            onChange={handleInput}
            fullWidth
            value={newProduct.description}
            name="description"
            label="Description"
            variant="outlined"
          />
          <TextField
            onChange={handleInput}
            fullWidth
            value={newProduct.mark}
            name="mark"
            label="Mark"
            variant="outlined"
          />
          <TextField
            onChange={handleInput}
            fullWidth
            value={newProduct.actors}
            name="actors"
            label="Actors"
            variant="outlined"
          />
          <TextField
            onChange={handleInput}
            fullWidth
            value={newProduct.year}
            name="year"
            label="Year"
            variant="outlined"
          />
          <TextField
            onChange={handleInput}
            fullWidth
            value={newProduct.price}
            name="price"
            label="Price"
            variant="outlined"
          />
          <TextField
            onChange={handleInput}
            fullWidth
            value={newProduct.image}
            name="image"
            label="Image"
            variant="outlined"
          />
          <Button variant="outline-dark">Create</Button>
        </form>
      </Container>
    </div>
  );
};

export default AddProduct;
