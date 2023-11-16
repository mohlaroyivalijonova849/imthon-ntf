import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Switch,
  Badge,
} from "@mui/material";
import Box from "@mui/system/Box";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Logo from "../assets/logo.svg";

const themes = {
  autumn: "light",
  halloween: "dark",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.light;
};

const navLinks = [
  {
    name: "Home",
    to: "",
  },
  {
    name: "About",
    to: "about",
  },
  {
    name: "Products",
    to: "products",
  },
  {
    name: "Cart",
    to: "cart",
  },
  {
    name: "Checkout",
    to: "checkout",
  },
  {
    name: "Orders",
    to: "orders",
  },
];

function Navbar() {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [active, setActive] = useState("Home");

  const handleMenu = (name) => {
    setActive(name);
  };

  const handleTheme = () => {
    const { autumn, halloween } = themes;
    const newTheme = theme === halloween ? autumn : halloween;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

   const handleCartClick = () => {
     setActive("Cart");
   };

  const { numItemsInCart } = useSelector((state) => state.cartState);
  const isAuthenticated = localStorage.getItem("token");
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <AppBar position="static" className="bg-base-200 py-2">
      <Toolbar
        className="container"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Menu
          id="navbar-menu"
          anchorEl={menuAnchor}
          keepMounted
          open={Boolean(menuAnchor)}
          onClose={handleMenuClose}
        >
          <MenuItem component={Link} to="/">
            Home
          </MenuItem>
          <MenuItem component={Link} to="/products">
            Products
          </MenuItem>
        </Menu>
        <Link to="/">
          <img src={Logo} width="52px" alt="" />
        </Link>

        <Box component="section" className="navbar-center hidden lg:flex">
          <ul className="menu flex items-center menu-horizontal gap-1">
            {navLinks.map((nav, index) => (
              <React.Fragment key={index}>
                {nav.name !== "Checkout" && nav.name !== "Orders" && (
                  <li
                    className={`flex items-center p-2 rounded-md cursor-pointer ${
                      active === nav.name
                        ? "bg-[#021431]"
                        : "hover:bg-[#021431]"
                    }`}
                    onClick={() => handleMenu(nav.name)}
                  >
                    <Link to={`/${nav.to}`}>{nav.name}</Link>
                  </li>
                )}
              </React.Fragment>
            ))}
            {isAuthenticated && (
              <>
                <li
                  className={`flex items-center p-2 rounded-md cursor-pointer ${
                    active === "Checkout"
                      ? "bg-[#021431]"
                      : "hover:bg-[#021431]"
                  }`}
                  onClick={() => handleMenu("Checkout")}
                >
                  <Link to="/checkout">Checkout</Link>
                </li>
                <li
                  className={`flex items-center p-2 rounded-md cursor-pointer ${
                    active === "Orders" ? "bg-[#021431]" : "hover:bg-[#021431]"
                  }`}
                  onClick={() => handleMenu("Orders")}
                >
                  <Link to="/orders">Orders</Link>
                </li>
              </>
            )}
          </ul>
        </Box>

        <Box
          className="navbar-end"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box
            className="swap swap-rotate"
            sx={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <BsMoonFill
              className={`swap-off h-4 w-4 ${
                theme === themes.light && "text-gray-500"
              }`}
            />
          </Box>
          <IconButton
            component={Link}
            to="/cart"
            color="inherit"
            onClick={handleCartClick}
          >
            <Badge badgeContent={numItemsInCart} color="error">
              <BsCart3 className="w-6 h-6" />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
