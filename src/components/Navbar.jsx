import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import { AuthContext } from "../contexts/AuthProvider";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ClientContext } from "../contexts/ClientProvider";
import "../styles/search.css";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "../images/log-out.png";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const { authWithGoogle, user, logOut } = React.useContext(AuthContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { productsCount } = React.useContext(ClientContext);

  let search = new URLSearchParams(window.location.search);
  let navigate = useNavigate();

  const [value, setValue] = React.useState("");
  const { getProducts } = React.useContext(ClientContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function searchFilm(key, value) {
    console.log(value);
    search.set(key, value);
    console.log(window.location.pathname);
    const newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    setValue(search.get("q"));
    getProducts();
  }

  React.useEffect(() => {
    setValue(search.get("q"));
  }, []);

  return (
    <AppBar position="static" style={{ background: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <img width="70px" src={logo} alt="logo" />
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link to="/admin">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Admin Panel</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <img width="70px" src={logo} alt="logo" />
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/admin">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Admin panel
              </Button>
            </Link>
          </Box>

          <div className="search-bar">
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <form action="" className="search-bar">
                <input
                  onChange={(event) => {
                    searchFilm("q", event.target.value);
                  }}
                  type="search"
                  name="search"
                  pattern=".*\S.*"
                  required
                />
                <button className="search-btn" type="submit">
                  <span>Search</span>
                </button>
              </form>
            </Box>
          </div>

          <Box>
            <MenuItem>
              <Link to="/cart">
                <IconButton color="inherit">
                  <Badge badgeContent={productsCount} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Link>
            </MenuItem>
          </Box>
          {user ? (
            <>
              <MenuItem>{user.email}</MenuItem>
              <Button onClick={logOut}>
                <img width="30px" src={LogoutIcon} alt="logout"></img>
              </Button>
            </>
          ) : (
            <Button onClick={authWithGoogle} color="inherit">
              Войти
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
