import React, { useState } from "react";
import {
  MdRestaurantMenu,
  MdNotificationsActive
} from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import Settings from "../Settings";
import Notifications from "../Notifications";
import { MainContext, useContext } from "../../Context";
import Categories from "../Categories";
const Navbar = () => {
  const { screen, setScreen } = useContext(MainContext);
  const Menus = [
    { name: "Home", icon: <MdRestaurantMenu />, sc: <Categories /> },
    { name: "Notifications", icon: <MdNotificationsActive />, sc: <Notifications /> },
    { name: "Settings", icon: <IoSettingsSharp />, sc: <Settings /> },
  ];
  const [active, setActive] = useState(0);
  return (
    <nav className="w-11/12 h-14 flex items-center justify-between px-2 bg-ThirdBrandColor drop-shadow-lg absolute bottom-5 rounded-2xl columns-4 z-50">
      {Menus.map((menu, i) => (
        <span key={i} className="w-24 h-full flex items-center justify-center">
          <a
            className="flex flex-col text-center"
            onClick={() => setActive(i)}
          >
            <span
              className={`text-2xl cursor-pointer duration-500 flex items-center justify-center ${i !== active ? "text-SecondBrandColor " : i === active && "text-BrandColor text-3xl"}`}
              onClick={() => { setScreen(menu.sc) }}
            >
              {menu.icon}
            </span>
          </a>
        </span>
      ))}
    </nav>
  );
};

export default Navbar;
