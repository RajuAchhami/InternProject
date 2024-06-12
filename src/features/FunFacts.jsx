import React from "react";
import { FunFactsBgImage } from "../assets";

const FunFacts = () => {
  const data = [
    {
      title: "150 +",
      desc: "Happy Students",
    },
    {
      title: "804 +",
      desc: "Course Hours",
    },
    {
      title: "50 +",
      desc: "Employed Students",
    },
    {
      title: "15 +",
      desc: "Years Experience",
    },
  ];
  return (
    <div className="w-full">
      <div className="bg-[#7a6ad8] h-[400px] rounded-tr-[192px]  relative  rounded-br-[192px] mr-20 ">
        <img src={FunFactsBgImage} className="ml-40 h-40 absolute" />
        <div className="grid grid-cols-2 lg:grid-cols-4 pl-10 md:pl-24 xl:pl-40 gap-4 md:gap-8 lg:gap-4  
        absolute bottom-0 mb-32 sm:mb-[125px] md:mb-24 lg:mb-32 w-full
        ">
          {data.map((item, index) => {
            return (
              <div className="text-white flex flex-col gap-1 md:gap-2 lg:gap-5" key={index}>
                <p className="text-3xl md:text-5xl   lg:text-4xl xl:text-6xl font-extrabold">{item.title}</p>
                <p className="text-xs md:text-base lg:text-lg xl:text-xl font-semibold">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
