import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import React from "react";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </React.Suspense>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
