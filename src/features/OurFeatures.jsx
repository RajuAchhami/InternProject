import React, { useState } from "react";
import { Services1, Services2, Services3 } from "../assets";

const OurServices = () => {

  const OurFeaturesData = [     
    {
      title: "Online Degrees",
      desc: "Whenever you need free templates in HTML CSS, you just remember TemplateMo website.",
      icon: Services1,
    },
    {
      title: "Short Courses",
      desc: "You can browse free templates based on different tags such as digital marketing, etc.",
      icon: Services2,
    },
    {
      title: "Web Experts",
      desc: "You can start learning HTML CSS by modifying free templates from our website too.",
      icon: Services3,
    },
  ];
  const Card = ({ item }) => {
    return (
      <div className={`cursor-pointer relative items-end  h-[400px] md:h-[500px] flex  md:items-center max-w-[415px]  ` }>
        <div className="size-40 lg:size-48 rounded-full z-50
         bg-[#7a6ad8] absolute right-0 md:right-5 lg:right-0 top-0 lg:-top-12 xl:top-0 flex items-center justify-center ">
          <img src={item.icon} className={`hover:-translate-y-2`}  />
        </div>
        <div className="rounded-2xl bg-[#f1f0fe] absolute  flex flex-col gap-6 px-7 pt-16 pb-10 w-80 md:max-w-64 lg:max-w-52 xl:max-w-80">
          <p className="text-[#1e1e1e] text-2xl font-semibold">{item.title}</p>
          <p className="text-[#4a4a4a] text-sm  leading-7">{item.desc}</p>
          <div className="bg-[#fff] px-6 py-2 w-max rounded-2xl">
            <p className="text-[#7a6ad8] text-sm font-semibold">Read more</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="container ">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mb-28 md:mb-12 xl:mb-0 gap-7 mt-28 xl:mt-20">
        {OurFeaturesData.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>
    </div>
  );
};
// left: 210px;
// bottom: 200px;

export default OurServices;
