import React from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const navItem = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/Services",
    title: "services",
  },
  {
    link: "/Courses",
    title: "Courses",
  },
  {
    link: "/Team",
    title: "Team",
  },
  {
    link: "/Events",
    title: "Events",
  },
  {
    link: "/register",
    title: "Register Now!",
  },
];

const Header = () => {
  return (
    <div className="  flex justify-between items-center px-28 bg-[#7A6AD8] h-20 text-white rounded-b-3xl">
      <div className="flex items-center">
        <h1 className="text-4xl font-semibold border-r pe-5 me-5">SCHOLAR</h1>
        <div className="form-container">
          <form className="relative flex items-center" action="">
            <input
              className="rounded-full bg-[#FFFFFF1A] placeholder:text-white ps-3 py-2 max-w-72  focus:border-black focus:border-2 focus:outline-none focus:ring-2 focus:ring-white "
              type="text"
              placeholder="Type Something"
            />
            <i className="absolute right-5">
              <FaSearch />
            </i>
          </form>
        </div>
      </div>
      <nav className="space-x-10">
        {navItem.map((item, index) => {
          return (
            <NavLink key={index} to={item.link}>
              {item.title}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Header;
