/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useContext, MainContext } from "../Context";
import { AiFillFire } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { BsFillLayersFill } from "react-icons/bs";
import { MdOutlineTimer } from "react-icons/md";
const Recipe = () => {
  const { recipeVal, setRecipeVal } = useContext(MainContext);
  console.log(recipeVal);
  return (
    <main className="w-full h-full flex flex-col items-center justify-start px-5">
      <div className="w-full h-60 flex flex-col items-center justify-center mb-4">
        <img
          src={recipeVal.strMealThumb}
          className="object-cover w-full h-full rounded-t-2xl"
        />
      </div>
      <h3 className="w-full text-center font-Montserrat font-semibold text-lg text-BrandColor">
        {recipeVal.strMeal}
      </h3>
      <div className="w-full h-96 flex items-center justify-start flex-col">
        <div className="w-full h-auto grid grid-cols-4 gap-4 my-5">
          <div className="flex items-center justify-between py-5 flex-col w-16 h-28 bg-BackgroundColor drop-shadow-md rounded-full">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-ThirdBrandColor"><MdOutlineTimer className="text-BackgroundColor text-2xl" /></div>
            <p className="font-Montserrat font-semibold text-sm text-white">{recipeVal.time} Min</p>
          </div>
          <div className="flex items-center justify-between py-5 flex-col w-16 h-28 bg-BackgroundColor drop-shadow-md rounded-full">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-ThirdBrandColor"><FaUsers className="text-BackgroundColor text-2xl" /></div>
            <p className="font-Montserrat font-semibold text-sm text-white text-center">{recipeVal.service}</p>
          </div>
          <div className="flex items-center justify-between py-5 flex-col w-16 h-28 bg-BackgroundColor drop-shadow-md rounded-full">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-ThirdBrandColor"><AiFillFire className="text-BackgroundColor text-2xl" /></div>
            <p className="font-Montserrat font-semibold text-sm text-white">{recipeVal.cal} Cal</p>
          </div>
          <div className="flex items-center justify-between py-5 flex-col w-16 h-28 bg-BackgroundColor drop-shadow-md rounded-full">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-ThirdBrandColor"><BsFillLayersFill className="text-BackgroundColor text-2xl" /></div>
            <p className="font-Montserrat font-semibold text-sm text-white">{recipeVal.diff}</p>
          </div>
        </div>
      </div>
      <h4 className="w-full text-left font-Montserrat font-semibold text-base mb-2 text-SecondBrandColor">Description</h4>
      <p className="w-full text-left font-Montserrat font-semibold text-xs text-SecondBrandColor">{recipeVal.Des}</p>
      <div className="my-5 w-full h-auto">
        <h2 className="font-Montserrat text-base font-semibold text-SecondBrandColor">Ingredients</h2>
        {recipeVal.recipe.map((value, i) => (
          <div key={i}>
            <ul className="w-full h-auto   px-5 font-Montserrat font-semibold text-sm text-BrandColor mt-2">
              <li>{value.first}</li>
              <li className="my-2">{value.second}</li>
              <li className="mb-2">{value.third}</li>
              <li>{value.fourth}</li>
            </ul>
          </div>
        ))}
      </div>
      <div className="w-full flex h-auto flex-col">
        <h4 className="mb-2 font-Montserrat font-semibold text-base ">Directions</h4>
        <p className="font-Montserrat font-semibold text-xs text-SecondBrandColor mb-5">{recipeVal.directions[0].tag}</p>
      </div>
    </main>
  );
};

export default Recipe;
