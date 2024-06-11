import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { TopComponents } from "../features/TopComponents";
import OurServices from "../features/OurFeatures";
import LatestCourses from "../features/LatestCourses";

const RootLayout = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <TopComponents /> */}
      <LatestCourses/>
      {/* <OurServices/> */}
      <Outlet />
    </>
  );
};

export default RootLayout;
