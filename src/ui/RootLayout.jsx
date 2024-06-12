import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { TopComponents } from "../features/TopComponents";
import OurServices from "../features/OurFeatures";
import LatestCourses from "../features/LatestCourses";
import FunFacts from "../features/FunFacts";

const RootLayout = () => {
  return (
    <>
  
      {/* <Header /> */}
      {/* <TopComponents /> */}
      <div className="my-20">
        <OurServices />
      </div>
      <div className="my-20 ">
        <LatestCourses />
      </div>
      <div className="my-20 ">
        <FunFacts />
      </div>

      <Outlet />
    </>
  );
};

export default RootLayout;
