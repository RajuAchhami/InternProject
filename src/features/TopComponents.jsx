import React, { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

export const TopComponents = () => {
  const [selectedData, setSelectedData] = useState(0);
  const TopComponentData = [
    {
      header: "OUR COURSES",
      title: "With Scholar Teachers, Everything Is Easier",
      desc: "Scholar is free CSS template designed by TemplateMo for online educational related websites. This layout is based on the famous Bootstrap v5.3.0 framework.",
      btn: "What's Scholar?",
      imgUrl: "/banner-item-01.jpg",
    },
    {
      header: "BEST RESULT",
      title: "Get the best result out of your effort",
      desc: "You are allowed to use this template for any educational or commercial purpose. You are not allowed to re-distribute the template ZIP file on any other website.",
      btn: "What's the best result?",
      imgUrl: "/banner-item-02.jpg",
    },
    {
      header: "ONLINE LEARNING",
      title: "Online Learning helps you save the time",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporious incididunt ut labore et dolore magna aliqua suspendisse.",
      btn: "What's Online Course?",
      imgUrl: "/banner-item-03.jpg",
    },
  ];

  const Card = ({ item }) => {
    return (
      <div
        className={`flex flex-col items-center gap-10 pt-14 pb-20  md:py-[78px] px-4 sm:px-10 lg:py-20 lg:px-24 lg:items-start rounded-3xl bg-cover bg-center`}
        style={{ backgroundImage: `url(${item.imgUrl})` }}
      >
        <div className="py-2 px-4 bg-[#7a6ad8] rounded-2xl lg:rounded-3xl">
          <p className="text-sm lg:text-lg lg:font-semibold text-white">{item.header}</p>
        </div>
        <div className="text-center lg:w-[65%] flex flex-col gap-6 lg:gap-10 lg:text-left">
          <p className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight">{item.title}</p>
          <p className="text-sm sm:text-base text-white">{item.desc}</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          <div>
            <p className="text-[#7a6ad8] bg-[#f8e5e5] px-4 py-2 sm:py-3 rounded-2xl lg:rounded-3xl cursor-pointer">
              Request Demo
            </p>
          </div>
          <div className="flex items-center gap-2 lg:gap-4 cursor-pointer">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-[#eae8e8] flex justify-center items-center">
              <FaPlay className="text-[#7a6ad8]" />
            </div>
            <p className="text-sm lg:text-base text-white">{item.btn}</p>
          </div>
        </div>
      </div>
    );
  };

  const NextSlide = () => {
    setSelectedData((prev) => (prev + 1) % TopComponentData.length);
  };

  const PrevSlide = () => {
    setSelectedData((prev) => (prev - 1 + TopComponentData.length) % TopComponentData.length);
  };

  return (
    <div className="w-full">
      <div className="bg-[url('/bgImage.jpg')] h-screen flex items-center bg-cover bg-no-repeat">
        <div className="lg:pl-32 xl:pl-48 2xl:pl-52 p-6 sm:p-12 w-full flex flex-col items-center justify-center lg:flex-row lg:items-end relative">
          <Card item={TopComponentData[selectedData]} />
          <div className="flex flex-row bottom-10 sm:bottom-16 lg:flex-col gap-3 lg:bottom-8 lg:left-10 xl:left-20 2xl:left-24 absolute">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-[#eae8e8] cursor-pointer flex justify-center items-center"
              onClick={PrevSlide}
            >
              <MdKeyboardArrowLeft className="text-lg sm:text-xl lg:text-2xl text-white" />
            </div>
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-[#eae8e8] cursor-pointer flex justify-center items-center"
              onClick={NextSlide}
            >
              <MdKeyboardArrowRight className="text-lg sm:text-xl lg:text-2xl text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
