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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function MyTable() {
  const { getProducts, products } = React.useContext(AdminContext);
  React.useEffect(() => {
    getProducts();
  }, []);
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
            <StyledTableCell align="right">#</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((film) => (
            <StyledTableRow key={film.id}>
              <StyledTableCell component="th" scope="row">
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
              <StyledTableCell align="right">
                <IconButton aria-label="delete" size="large">
                  <DeleteIcon />
                </IconButton>
                <Button>
                  <img src={editIcon} alt="edit-icon" />
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
