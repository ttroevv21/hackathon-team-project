import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ClientContext } from "../contexts/ClientProvider";
import { TableFooter } from "@mui/material";

export default function CartTable({ cart }) {
  const { deleteProductInCart } = React.useContext(ClientContext);
  console.log(cart);

  return (
    <div className="cart-global">
      <div className="cart">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Фильм</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.products.map((item) => (
                <TableRow
                  key={item.product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <div className="cart-product">
                      <div className="product-img">
                        <img src={item.product.image} alt={item.product.name} />
                      </div>
                      <div className="product-info">
                        <h6>{item.product.name}</h6>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="product-price">
                      <h6>{item.product.price} сом</h6>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <h4>Итого: {cart.totalPrice} сом</h4>
              <button className="cart-btn btn btn-sm animated-button thar-two">
                Оплатить
              </button>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
