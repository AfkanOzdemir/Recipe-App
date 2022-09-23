import React, { useState } from "react";
import { MdOutlineSell } from "react-icons/md";
import profilePhoto from "../../images/userProfile/profile.jpg";
const Settings = () => {
  const [userName, setUserName] = useState("Afkan Özdemir");
  const [rank, setRank] = useState("Vegeterian");
  const [phone , setPhone] = useState("+90 000 000 00 00");
  const [mail , setMail] = useState("afkanozdemir@gmail.com")
  return (
    <section className="w-full h-full flex items-center justify-center flex-col px-5 py-5">
      <div className="w-full h-40 flex items-center justify-center flex-col">
        <img src={profilePhoto.src} className="w-20 h-20 rounded-full mb-5" />
        <h3 className="font-Montserrat text-lg font-semibold mb-1">{userName}</h3>
        <p className="font-Montserrat text-sm font-normal"><span className="font-Montserrat text-sm font-semibold">Rank : </span>{rank}</p>
      </div>
      <form className="w-full h-full flex items-center justify-center px-10 flex-col">
            <label className="w-full pl-2 mb-2 font-Montserrat text-sm font-medium text-SecondBrandColor">User Name</label>
            <input className="w-full h-10 pl-2 rounded-full bg-ThirdBrandColor mb-8 font-Montserrat text-sm font-medium text-SecondBrandColor" type="text" maxLength="10" placeholder={userName}></input>

            <label className="w-full pl-2 mb-2 font-Montserrat text-sm font-medium text-SecondBrandColor">Phone Number</label>
            <input className="w-full h-10 pl-2 rounded-full bg-ThirdBrandColor mb-8 font-Montserrat text-sm font-medium text-SecondBrandColor" type="tel" minLength="10" maxLength="14" placeholder={phone}></input>

            <label className="w-full pl-2 mb-2 font-Montserrat text-sm font-medium text-SecondBrandColor">E-Mail</label>
            <input className="w-full h-10 pl-2 rounded-full bg-ThirdBrandColor mb-8 font-Montserrat text-sm font-medium text-SecondBrandColor" type="mail" placeholder={mail}></input>

            <button className="bg-BrandColor w-full py-2 rounded-full font-Montserrat text-base font-semibold text-white">Save Changes</button>
      </form>
    </section>
  );
};

export default Settings;
