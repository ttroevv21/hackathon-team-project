import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ClientContext } from "../contexts/ClientProvider";

export default function CartTable() {
  const { cart, deleteProductInCart } = React.useContext(ClientContext);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>Итого: {cart.totalPrice} сом</caption>
        <TableHead>
          <TableRow>
            <TableCell>Название фильма</TableCell>
            <TableCell align="right">Цена</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.products.map((item) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">{item.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
