import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AdminContext } from "../contexts/AdminProvider";
import Loading from "./Loading";
import { IconButton, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import editIcon from "../images/pencil.png";
import EditRow from "./EditRow";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function MyTable() {
  const { getProducts, products, deleteProduct } =
    React.useContext(AdminContext);

  React.useEffect(() => {
    getProducts();
  }, []);

  const [editProduct, setEditProduct] = React.useState(null);

  if (!products) {
    return <Loading />;
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Mark</StyledTableCell>
            <StyledTableCell align="right">Actors</StyledTableCell>
            <StyledTableCell align="right">Year</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Image</StyledTableCell>
            <StyledTableCell align="right">Genre</StyledTableCell>
            <StyledTableCell align="right">#</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((film) => (
            <React.Fragment key={film.id}>
              {editProduct?.id === film.id ? (
                <EditRow
                  setEditProduct={setEditProduct}
                  editProduct={editProduct}
                />
              ) : (
                <StyledTableRow
                  key={film.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell component="th" scope="products">
                    {film.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {film.description}
                  </StyledTableCell>
                  <StyledTableCell align="right">{film.mark}</StyledTableCell>
                  <StyledTableCell align="right">{film.actors}</StyledTableCell>
                  <StyledTableCell align="right">{film.year}</StyledTableCell>
                  <StyledTableCell align="right">{film.price}</StyledTableCell>
                  <StyledTableCell align="right">{film.image}</StyledTableCell>
                  <StyledTableCell align="right">{film.genre}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Button onClick={() => setEditProduct(film)}>
                      <img src={editIcon} alt="edit-icon" />
                    </Button>
                    <IconButton
                      onClick={() => deleteProduct(film.id)}
                      aria-label="delete"
                      size="large"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
