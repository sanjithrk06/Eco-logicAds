import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../components";

const MainLayout = () => {
  return (
    <div className=" bg-gray-100/50">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
