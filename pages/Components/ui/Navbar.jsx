import React from "react";
import {
  MdRestaurantMenu,
  MdNotificationsActive,
  IoMdSettings,
} from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
const Navbar = () => {
  return (
    <nav className="w-11/12 h-14 flex items-center justify-between px-8 bg-ThirdBrandColor drop-shadow-lg absolute bottom-5 rounded-2xl columns-4 z-50">
      <a className="cursor-pointer">
        <MdRestaurantMenu className="text-2xl text-BrandColor" />
      </a>
      <a className="cursor-pointer">
        <AiFillHeart className="text-2xl text-SecondBrandColor" />
      </a>
      <a className="cursor-pointer">
        <MdNotificationsActive className="text-2xl text-SecondBrandColor" />
      </a>
      <a className="cursor-pointer">
        <IoSettingsSharp className="text-2xl text-SecondBrandColor" />
      </a>
    </nav>
  );
};

export default Navbar;
