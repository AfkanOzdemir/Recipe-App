import React from "react";
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
