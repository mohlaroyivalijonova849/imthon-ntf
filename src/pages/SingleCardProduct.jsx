// import { useLoaderData } from "react-router-dom";
// import { formatPrice, customFetch, generateAmountOptions } from "../utils";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addItem } from "../features/cart/cartSlice";

// export const loader = async ({ params }) => {
//   const request = await customFetch(`/products/${params.id}`);
//   return { product: request.data.data };
// };

// function SingleProduct() {
//   const { product } = useLoaderData();
//   const { image, title, price, description, colors, company } =
//     product.attributes;
//   const dollarAmount = formatPrice(price);
//   const [productColor, setProductColor] = useState(colors[0]);
//   const [amount, setAmount] = useState(1);
//   const handleAmount = (e) => {
//     setAmount(parseInt(e.target.value));
//   };

//   const dispatch = useDispatch();
//   const productToBuy = {
//     cartID: product.id + productColor,
//     productID: product.id,
//     image,
//     title,
//     price,
//     amount,
//     productColor,
//     company,
//   };

//   const addToCart = () => {
//     dispatch(addItem({ product: productToBuy }));
//   };
//   return (
//     <section className="align-elements py-20">
//       <div className="text-md breadcrumbs">
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/products">Products</Link>
//           </li>
//         </ul>
//       </div>
//       <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
//         <img
//           src={image}
//           alt=""
//           className="w-96 h-96 object-cover rounded-lg lg:w-full"
//         />
//         <div>
//           <h1 className="capitalize text-3xl font-bold">{title}</h1>
//           <h4 className="text-xl text-neutral-content font-bold mt-2">
//             {company}
//           </h4>
//           <p className="mt-3 text-xl">{dollarAmount}</p>
//           <p className="mt-6 leading-8">{description}</p>
//           <div className="mt-6">
//             <h4 className="text-md font-medium tracking-wider capitalize">
//               colors
//             </h4>
//             <div className="mt-2">
//               {colors.map((color) => {
//                 return (
//                   <button
//                     key={color}
//                     type="button"
//                     className={`badge h-6 w-6 mr-2 ${
//                       color === productColor && "border-2 border-primary"
//                     }`}
//                     style={{ background: color }}
//                     onClick={() => {
//                       setProductColor(color);
//                     }}
//                   ></button>
//                 );
//               })}
//             </div>
//             <div className="form-control w-full max-w-xs">
//               <label className="label" htmlFor="amount">
//                 <h4 className="text-md font-medium -tracking-wider capitalize">
//                   amount
//                 </h4>
//               </label>
//               <select
//                 className="select select-primary select-bordered select-md"
//                 id="amount"
//                 value={amount}
//                 onChange={handleAmount}
//               >
//                 {generateAmountOptions(20)}
//               </select>
//               <div className="mt-10">
//                 <button onClick={addToCart} className="btn btn-primary btn-md">
//                   Add to bag
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SingleProduct;

import { useLoaderData } from "react-router-dom";
import { formatPrice, customFetch, generateAmountOptions } from "../utils";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { Typography, Button, Box, Select, MenuItem, Grid } from "@mui/material";

export const loader = async ({ params }) => {
  const request = await customFetch(`/products/${params.id}`);
  return { product: request.data.data };
};

function SingleProduct() {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const dispatch = useDispatch();
  const productToBuy = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    amount,
    productColor,
    company,
  };

  const addToCart = () => {
    dispatch(addItem({ product: productToBuy }));
  };

  return (
    <section className=" py-20 container">
      <Box sx={{ display: "flex" }}>
        <ul style={{ listStyle: "none", display: "flex", gap: "16px" }}>
          <li>
            <Link to="/">
              <Typography variant="body1">Home</Typography>
            </Link>
          </li>
          <li>
            <Link to="/products">
              <Typography variant="body1">Products</Typography>
            </Link>
          </li>
        </ul>
      </Box>
      <Grid container spacing={3} className="mt-6">
        <Grid item xs={12} lg={6}>
          <img
            src={image}
            alt=""
            className="w-96 h-96 object-cover rounded-lg lg:w-full"
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h4" className="capitalize text-3xl font-bold">
            {title}
          </Typography>
          <Typography
            variant="h6"
            className="text-xl text-neutral-content font-bold mt-2"
          >
            {company}
          </Typography>
          <Typography variant="h6" className="mt-3 text-xl">
            {dollarAmount}
          </Typography>
          <Typography variant="body1" className="mt-6 leading-8">
            {description}
          </Typography>
          <Box mt={6}>
            <Typography
              variant="body1"
              className="text-md font-medium tracking-wider capitalize"
            >
              colors
            </Typography>
            <Box mt={2}>
              {colors.map((color) => (
                <Button
                  key={color}
                  type="button"
                  className={`badge h-6 w-6 mr-2 ${
                    color === productColor && "border-2 border-primary"
                  }`}
                  style={{ background: color }}
                  onClick={() => {
                    setProductColor(color);
                  }}
                ></Button>
              ))}
            </Box>
            <Box className="form-control w-full max-w-xs" mt={2}>
              <label className="label" htmlFor="amount">
                <Typography
                  variant="body1"
                  className="text-md font-medium -tracking-wider capitalize"
                >
                  amount
                </Typography>
              </label>
              <Select
                className="select select-primary select-bordered select-md"
                id="amount"
                value={amount}
                onChange={handleAmount}
              >
                {generateAmountOptions(20)}
              </Select>
              <Box mt={4}>
                <Button onClick={addToCart} variant="contained" color="primary">
                  Add to bag
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}

export default SingleProduct;
