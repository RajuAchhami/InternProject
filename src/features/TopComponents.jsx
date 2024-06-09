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
      btn: "What's Online Course  ?",
      imgUrl: "/banner-item-03.jpg",
    },
  ];
  const Card = ({ item }) => {
    return (
      <div
        className={`flex  flex-col items-center lg:h-max gap-10 lg:items-start py-20 sm:py-28 px-4 sm:px-20 lg:p-20 rounded-3xl  lg:max-w-[1100px] `}
        style={{ backgroundImage: `url(${item?.imgUrl})` }}
      >
        <div className="py-2 px-4 bg-[#7a6ad8] rounded-2xl lg:rounded-3xl">
          <p className="text-sm lg:text-lg lg:font-semibold text-white">{item?.header}</p>
        </div>
        <div className="text-center  lg:w-[65%] flex flex-col gap-10">
          <p className="text-4xl lg:text-5xl font-bold text-white left-48 lg:leading-[60px]">
            {item?.title}
          </p>
          <p className="text-sm lg:text-base text-white">{item?.desc}</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div>
            <p className="text-[#7a6ad8] bg-[#f8e5e5] px-4 py-3 rounded-3xl cursor-pointer">
              Request Demo
            </p>
          </div>
          <div className="flex items-center gap-4  cursor-pointer">
            <div className="size-12 rounded-full bg-[#eae8e8] cursor-pointer flex justify-center items-center">
              <FaPlay className="size-4 text-[#7a6ad8]" />
            </div>
            <p className="text-white">{item?.btn}</p>
          </div>
        </div>
      </div>
    );
  };

  const NextSlide = () => {
    setSelectedData((prev) => {
      return (prev + 1) % TopComponentData.length; // Use modulo to loop back to the beginning
    });
  };

  const PrevSlide = () => {
    setSelectedData((prev) => {
      return (prev - 1 + TopComponentData.length) % TopComponentData.length; // Ensure positive index
    });
  };
  return (
    <div className="w-full ">
      <div className=" bg-[url('/bgImage.jpg')]  h-screen  flex items-center bg-cover bg-no-repeat">
        <div className="lg:pl-52 p-6 sm:p-10 lg:w-full flex   flex-col items-center justify-center lg:flex-row   lg:items-end container relative">
          <Card item={TopComponentData[selectedData]} />
          <div className="flex flex-row bottom-10 sm:bottom-16 lg:flex-col gap-3 lg:bottom-8 lg:left-20 xl:left-36 absolute">
            <div
              className="size-14 rounded-full bg-[#eae8e8] cursor-pointer flex justify-center items-center transparent"
              onClick={() => {
                PrevSlide();
              }}
            >
              <MdKeyboardArrowLeft className="size-12 text-white" />
            </div>
            <div
              className="size-14 rounded-full bg-[#eae8e8] cursor-pointer flex justify-center items-center transparent"
              onClick={() => {
                NextSlide();
              }}
            >
              <MdKeyboardArrowRight className="size-12 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
