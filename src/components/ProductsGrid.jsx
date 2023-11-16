import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

function ProductsGrid() {
  const { products } = useLoaderData();

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { id, attributes } = product;
        const { title, image, price } = attributes;
        const dollarAmount = formatPrice(price);

        return (
          <Link
            to={`/products/${id}`}
            key={id}
            className="text-decoration-none mb-8"
          >
            <Card className="shadow-xl hover:shadow-2xl transition duration-300">
              <CardMedia
                component="img"
                alt=""
                height="200"
                image={image}
                className="rounded-xl object-cover"
                sx={{ width: "100%", height: "256px" }}
              />
              <CardContent className="text-center">
                <Typography variant="h6" className="capitalize tracking-wider">
                  {title}
                </Typography>
                <Typography
                  variant="body1"
                  className="text-secondary font-medium"
                >
                  {dollarAmount}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsGrid;
