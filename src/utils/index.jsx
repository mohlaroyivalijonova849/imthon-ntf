import { MenuItem } from "@mui/material";
import axios from "axios";

const productonUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productonUrl,
});

export const formatPrice = (price) => {
  const dollarAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return dollarAmount;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <MenuItem key={amount} value={amount}>
        {amount}
      </MenuItem>
    );
  });
};
