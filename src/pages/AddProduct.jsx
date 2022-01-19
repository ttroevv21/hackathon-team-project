import React, { useState, useContext } from "react";
import { AdminContext } from "../contexts/AdminProvider";
import { Container, TextField } from "@mui/material";
import { Button } from "react-bootstrap";

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    mark: "",
    actors: "",
    year: "",
    price: "",
    image: "",
    genre: "",
  });

  const { addProduct } = useContext(AdminContext);

  function handleInput(event) {
    let obj = {
      ...newProduct,
      [event.target.name]: event.target.value,
    };
    setNewProduct(obj);
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
    setNewProduct({
      name: "",
      description: "",
      mark: "",
      actors: "",
      year: "",
      price: "",
      image: "",
      genre: "",
    });
  }

  return (
    <div className="add-product">
      <Container>
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
          <TextField
            onChange={handleInput}
            fullWidth
            value={newProduct.genre}
            name="genre"
            label="Genre"
            variant="outlined"
          />
          <Button type="submit" variant="outline-dark">
            Create
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default AddProduct;
