/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import "swiper/css";
import { MainContext, useContext } from "../Context";
import { IoMdArrowDropright } from "react-icons/io";
import MealCategory from "../../data/Category.json"
import { MdOutlineTimer } from "react-icons/md";
import Recipe from "../Components/Recipe"
const Categories = () => {
    console.log(MealCategory.meals)
    const [arrowStyle, setArrowStyle] = useState("rotate-[90deg]");
    const [isOpened, setIsOpened] = useState("h-full");
    const [isHidden, setIsHidden] = useState("flex");
    const { screen, setScreen } = useContext(MainContext);
    const { recipeVal, setRecipeVal } = useContext(MainContext);
    const ArrowClicked = () => {
        arrowStyle == "rotate-[90deg]" ? setArrowStyle("rotate-[0deg]") : setArrowStyle("rotate-[90deg]");
        isOpened == "h-full" ? setIsOpened("h-0") : setIsOpened("h-full")
    }
    return (
        <section className="w-full h-full px-5">
            <p className='w-full flex items-center cursor-pointer font-Montserrat font-medium mb-2' onClick={() => ArrowClicked()}><IoMdArrowDropright className={`transition-all ease-linear ${arrowStyle} mr-2`} />Favorite Recipes</p>
            <div className={`w-full grid grid-cols-2 gap-2`}>
                {MealCategory.meals && MealCategory.meals.map((value, i) => (
                    <a key={i} className={`w-full flex items-center justify-between h-80 bg-ThirdBrandColor rounded-lg drop-shadow-md flex-col overflow-hidden cursor-pointer mb-5  transition-all ease-out ${isOpened}`} onClick={() => setRecipeVal(value) + setScreen(<Recipe />)}>
                        <img src={value.strMealThumb} className="w-full h-24 object-cover" />
                        <p className="font-Montserrat text-sm font-semibold text-SecondBrandColor h-auto w-11/12 text-center mb-2">{value.strMeal}</p>
                        <p className="font-Montserrat text-xs font-medium text-SecondBrandColor h-auto w-full text-center px-2">{value.Des}</p>
                        <div className="w-full h-10 flex items-center justify-center">
                            <MdOutlineTimer className="w-4 h-4 text-SecondBrandColor mr-2" />
                            <span className="font-montserrat text-sm font-semibold">{value.time}min</span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}



export default Categories
