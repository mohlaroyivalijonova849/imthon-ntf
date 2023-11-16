import React from "react";
import { Button, ButtonGroup, Stack, Typography } from "@mui/material";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";

function ProductsContainer() {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState("grid");

  const setActiveStyles = (pattern) => {
    return `btn btn-circle btn-sm ${
      pattern === layout ? "btn-primary" : "btn-ghost text-based-content"
    }`;
  };

  return (
    <div className="container">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mt={8}
        borderBottom="1px solid #ccc"
        pb={5}
      >
        <Typography variant="h6" fontWeight="medium">
          {totalProducts} product{totalProducts > 1 ? "s" : ""}
        </Typography>
        <ButtonGroup variant="outlined" aria-label="layout buttons">
          <Button
            className={setActiveStyles("grid")}
            onClick={() => setLayout("grid")}
          >
            <BsFillGridFill />
          </Button>
          <Button
            className={setActiveStyles("list")}
            onClick={() => setLayout("list")}
          >
            <BsList />
          </Button>
        </ButtonGroup>
      </Stack>
      <div>
        {totalProducts === 0 ? (
          <Typography variant="h5" mt={16}>
            Sorry, no product matched your search...
          </Typography>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </div>
  );
}

export default ProductsContainer;
