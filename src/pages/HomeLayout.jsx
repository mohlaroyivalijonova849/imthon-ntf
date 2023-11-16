import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "../components";
import Navbar from "../components/Navbar";
import Loader from "../components/Loading";

function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />

      {isPageLoading ? (
        <div className="flex items-center justify-center absolute top-[50%] left-[50%]">
          <Loader />
        </div>
      ) : (
        <main className="align-elements">
          <Outlet />
        </main>
      )}
    </>
  );
}

export default HomeLayout;
