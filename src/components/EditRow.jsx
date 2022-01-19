import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import { Button, TableCell, TableRow } from "@mui/material";
import { AdminContext } from "../contexts/AdminProvider";

const EditRow = ({ setEditProduct, editProduct }) => {
  const [product, setProduct] = useState(editProduct);
  const { saveEditedProduct } = useContext(AdminContext);

  function handleChange(event) {
    let obj = {
      ...product,
      [event.target.name]: event.target.value,
    };
    setProduct(obj);
  }

  function handleClick() {
    saveEditedProduct(product);
    setEditProduct(null);
  }

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="products">
        <TextField
          variant="outlined"
          name="name"
          onChange={handleChange}
          value={product.name}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          variant="outlined"
          name="description"
          onChange={handleChange}
          value={product.description}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          variant="outlined"
          name="mark"
          onChange={handleChange}
          value={product.mark}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          variant="outlined"
          name="actors"
          onChange={handleChange}
          value={product.actors}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          variant="outlined"
          name="year"
          onChange={handleChange}
          value={product.year}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          variant="outlined"
          name="price"
          onChange={handleChange}
          value={product.price}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          variant="outlined"
          name="image"
          onChange={handleChange}
          value={product.image}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          variant="outlined"
          name="genre"
          onChange={handleChange}
          value={product.genre}
        />
      </TableCell>
      <TableCell align="right">
        <Button onClick={handleClick} variant="outlined">
          Save
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default EditRow;
