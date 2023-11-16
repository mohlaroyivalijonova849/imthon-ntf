import React from "react";
import { Hero, FeaturedProducts } from "../components";
import { customFetch } from "../utils";

const url = "/products?featured=true";

export const loader = async () => {
  const request = await customFetch(url);
  const products = request.data.data;
  return { products };
};

function Landing() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
}

export default Landing;
