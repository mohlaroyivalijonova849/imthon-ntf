import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

function ProductsList() {
  const { products } = useLoaderData();

  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { id, attributes } = product;
        const { title, image, price, company } = attributes;
        const dollarAmount = formatPrice(price);

        return (
          <Link
            to={`/products/${id}`}
            key={id}
            className="text-decoration-none"
          >
            <Card className="p-8 rounded-lg flex flex-col items-center sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group">
              <CardMedia
                component="img"
                alt={title}
                image={image}
                className="h-24 w-24 sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300 rounded-lg"
              />
              <CardContent className="ml-0 sm:ml-16 flex flex-col justify-between">
                <Typography
                  variant="h6"
                  className="capitalize font-medium text-lg"
                >
                  {title}
                </Typography>
                <Typography
                  variant="body1"
                  className="capitalize font-medium text-lg text-neutral-content"
                >
                  {company}
                </Typography>
              </CardContent>
              <Typography
                variant="body1"
                sx={{ marginLeft: "auto" }}
                className="font-medium text-lg"
              >
                {dollarAmount}
              </Typography>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsList;