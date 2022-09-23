import React from "react";
import Best from "./Best";
import Drinks from "./Drinks";
import Weekly from "./Weekly";
import { MainContext, useContext } from "../Context";
const MainPage = () => {
  const { screen, setScreen } = useContext(MainContext);
  return (
    <main className="w-full h-full overflow-y-auto scrollbar-hide py-4">
      {screen}
    </main>
  );
};

export default MainPage;
