import React from "react";
import userProfile from "../../../images/userProfile/profile.jpg";
import { MdShoppingBasket, MdLocationOn } from "react-icons/md";
import { BsCaretDownFill } from "react-icons/bs";
const Header = () => {
  return (
    <header className="w-full h-16 flex items-center justify-between rounded-t-2xl px-5 bg-ThirdBrandColor z-10">
      <div className="profile W-[10%] h-full flex items-center justify-center">
        <img src={userProfile.src} className="w-10 rounded-full" />
      </div>
      <div className="profile W-[80%] h-full flex items-center justify-center flex-col">
        <h3 className="font-Montserrat text-lg font-semibold">RECIPE APP</h3>
        <p className="w-full h-auto flex items-center justify-center font-Montserrat text-sm">
          <MdLocationOn className=" mr-1 text-lg text-BrandColor" /> Turkey ,
          Istanbul
          <BsCaretDownFill className="ml-2 text-xs text-BrandColor" />
        </p>
      </div>
      <div className="profile W-[10%] h-full flex items-center justify-center">
        <MdShoppingBasket className="text-lg text-BrandColor" />
      </div>
    </header>
  );
};

export default Header;
