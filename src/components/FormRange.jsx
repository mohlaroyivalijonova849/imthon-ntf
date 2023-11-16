import React from "react";
import { Slider, Typography, Button } from "@mui/material";
import { formatPrice } from "../utils";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function FormRange({ label, name, size, price }) {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setSelectedPrice(newValue);
  };

  const handleSearch = () => {
    // Trigger search action with the updated price
    navigate(
      `/products?search=&category=all&company=all&order=a-z&price=${selectedPrice}&shipping=on`
    );
  };

  return (
    <div>
      <Typography id={`${name}-slider`} gutterBottom>
        {label}
      </Typography>
      <Slider
        value={selectedPrice}
        min={0}
        max={maxPrice}
        step={step}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby={`${name}-slider`}
      />
      <div className="w-full flex justify-between text-xs px-2 py-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max: {formatPrice(maxPrice)}</span>
      </div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
}

export default FormRange;
