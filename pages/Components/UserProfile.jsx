import React from 'react'
import { MainContext, useContext } from "../Context";
import { MdOutlineTimer } from "react-icons/md";
import Recipe from "../Components/Recipe"
const UserProfile = () => {
    const { profile, setProfile } = useContext(MainContext);
    const { recipeVal, setRecipeVal } = useContext(MainContext);
    const { screen, setScreen } = useContext(MainContext);
    return (
        <section className='w-full h-full flex items-center justify-start flex-col px-5'>
            <div className="w-full h-40 flex items-center justify-center flex-col mb-4">
                <img src={profile.photo} className="w-20 h-20 rounded-full mb-5" />
                <h3 className="font-Montserrat text-lg font-semibold mb-1">{profile.first_name + " " + profile.last_name}</h3>
                <p className="font-Montserrat text-sm font-normal"><span className="font-Montserrat text-sm font-semibold">Rank : </span>{profile.Rank}</p>
            </div>
            {console.log(profile.last_visited)}
            <div className='w-full h-full'>
                <p className='w-full flex items-center cursor-pointer font-Montserrat font-medium mb-2'>Last Visited</p>
                <div className={`w-full grid grid-cols-2 gap-2`}>
                    {profile.last_visited && profile.last_visited.map((value, i) => (
                        <a key={i} className={`w-full flex items-center justify-between h-80 bg-ThirdBrandColor rounded-lg drop-shadow-md flex-col overflow-hidden cursor-pointer mb-5  transition-all ease-out`} onClick={() => setRecipeVal(value) + setScreen(<Recipe />)}>
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
            </div>
        </section >
    )
}

export default UserProfile