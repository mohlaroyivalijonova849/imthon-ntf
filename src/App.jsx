import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import {
  About,
  Cart,
  Products,
  SingleCardProduct,
  Error,
  HomeLayout,
  Landing,
  Orders,
  Checkout,
} from "./pages";
// components
import { ErrorElement, Protected } from "./components";
import Login from "./authentication/Login";
import SignUp from "./authentication/SignUp";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleCardProduct";
import { loader as productsLoader } from "./pages/Products";
import { useState } from "react";

function App() {
  const routes = createBrowserRouter([
    { path: "/", element: <Protected /> },
    {
      path: "/",
      element: <HomeLayout />,

      children: [
        {
          index: true,
          element: <Landing />,
          loader: landingLoader,
          errorElement: <ErrorElement />,
        },
        { path: "about", element: <About /> },
        {
          path: "products",
          element: <Products />,
          loader: productsLoader,
          errorElement: <ErrorElement />,
        },
        { path: "cart", element: <Cart /> },
        {
          path: "checkout",
          element: (
            <Protected>
              <Checkout />
            </Protected>
          ),
        },
        {
          path: "orders",
          element: (
            <Protected>
              <Orders />
            </Protected>
          ),
        },
        {
          path: "products/:id",
          element: <SingleCardProduct />,
          errorElement: <ErrorElement />,
          loader: singleProductLoader,
        },
      ],
      errorElement: <Error />,
    },
    { path: "/login", element: <Login />, errorElement: <Error /> },
    { path: "/signup", element: <SignUp />, errorElement: <Error /> },
  ]);

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<App />}>
  //       <Route path="signup" element={<SignUp />} />
  //       <Route path="login" element={<Login />} />
  //       <Route path="/" element={<Protected />}>
  //         <Route path="/" index element={<HomeLayout />} />
  //         <Route path="about" element={<About />} />
  //         <Route path="orders" element={<Orders />} />
  //         <Route path="about" element={<Products />} />
  //         <Route path="about" element={<About />} />
  //       </Route>
  //     </Route>
  //   )
  // );

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
