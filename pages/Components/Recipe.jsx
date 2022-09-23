import React from "react";
import { useContext, MainContext } from "../Context";
import { AiFillFire } from "react-icons/ai";
import { GiSlicedBread, GiMeat, GiChocolateBar } from "react-icons/gi";
import { FaBurn } from "react-icons/fa";
const Recipe = (val) => {
  const { recipeVal, setRecipeVal } = useContext(MainContext);
  console.log(recipeVal);
  return (
    <main className="w-full h-full flex flex-col items-center justify-start px-5">
      <div className="w-full h-60 flex flex-col items-center justify-center mb-4">
        <img
          src={recipeVal.thumbnail_url}
          className="object-cover w-full h-full rounded-t-2xl"
        />
      </div>
      <h3 className="w-full text-center font-Montserrat font-normal text-xl text-SecondBrandColor mb-2">
        {recipeVal.name}
      </h3>
      <div className="w-full h-16 bg-BrandColor flex items-center justify-center rounded-2xl flex-col py-2 px-2">
        <div className="w-full h-full flex items-center justify-between">
          <div className="w-16 h-full flex items-center justify-center flex-col">
            <AiFillFire className="text-white text-xl mb-1" />
            <p className="text-white">{recipeVal.nutrition.calories}Cal</p>
          </div>
          <div className="w-16 h-full flex items-center justify-center flex-col">
            <GiSlicedBread className="text-white text-xl mb-1" />
            <p className="text-white">
              {recipeVal.nutrition.carbohydrates}Carb
            </p>
          </div>
          <div className="w-16 h-full flex items-center justify-center flex-col">
            <FaBurn className="text-white text-xl mb-1" />
            <p className="text-white">{recipeVal.nutrition.fat}Fat</p>
          </div>
          <div className="w-16 h-full flex items-center justify-center flex-col">
            <GiMeat className="text-white text-xl mb-1" />
            <p className="text-white">{recipeVal.nutrition.protein}Prt</p>
          </div>
          <div className="w-16 h-full flex items-center justify-center flex-col">
            <GiChocolateBar className="text-white text-xl mb-1" />
            <p className="text-white">{recipeVal.nutrition.sugar}Sgr</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Recipe;
