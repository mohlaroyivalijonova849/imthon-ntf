import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "/about", text: "about" },
  { id: 3, url: "/products", text: "products" },
  { id: 4, url: "/cart", text: "cart" },
  // { id: 5, url: "/checkout", text: "checkout" },
  // { id: 6, url: "/orders", text: "orders" },
];

function NavLinks() {
  return (
    <List component="nav" aria-label="main navigation">
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <ListItem key={id} component={Link} to={url} button>
            <ListItemText primary={text} />
          </ListItem>
        );
      })}
    </List>
  );
}

export default NavLinks;
