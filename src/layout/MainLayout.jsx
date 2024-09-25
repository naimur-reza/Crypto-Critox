import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../components/Common/Navbar";

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
