import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import { MainContext, useContext } from "../Context";
import Recipe from "./Recipe";
const Weekly = () => {
  const { screen, setScreen } = useContext(MainContext);
  const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/feeds/list',
    params: {size: '5', timezone: '+0700', vegetarian: 'false', from: '0'},
    headers: {
      'X-RapidAPI-Key': 'a07fdf20e0msh71fe74cf184f15ap1e4eaejsnc58e71ec4984',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };
  const [loading, setLoading] = useState(false);
  const [val, setVal] = useState();
  const { recipeVal, setRecipeVal } = useContext(MainContext);
  const getAnswer = async () => {
    const { data } = await axios(
      "https://tasty.p.rapidapi.com/feeds/list",
      options
    );
    setVal(data.results[3].items);
    setLoading(true);
  };
  useEffect(() => {
    getAnswer();
  }, []);
  useEffect(() => {
    console.log(recipeVal);
  }, [recipeVal]);

  if (loading) {
    return (
      <div className="w-full h-48 flex items-center justify-center flex-col mt-10 px-5">
        <p className="w-full font-Montserrat font-semibold mb-2">
          Weekly Recipes
        </p>
        <Swiper
          slidesPerView={3}
          spaceBetween={15}
          slidesPerGroup={3}
          loopFillGroupWithBlank={true}
          className="mySwiper w-full h-full"
        >
          {val.length > 0 &&
            val.map((val, index) => (
              <SwiperSlide
                key={val.id}
                className="w-full h-full flex items-start justify-start cursor-pointer"
              >
                <a className="w-full h-full flex items-center justify-center flex-col">
                  <div
                    className="w-full h-4/5 flex items-center justify-center relative"
                    onClick={() => setRecipeVal(val) + setScreen(<Recipe/>)}
                  >
                    <img
                      src={val.thumbnail_url}
                      className="w-full h-20 object-cover flex items-center justify-center rounded-2xl"
                    />
                  </div>
                  <p className="w-full h-full text-center flex items-center justify-center z-20 font-Montserrat font-semibold text-xs mt-2">
                    {val.name}
                  </p>
                </a>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    );
  }
};

export default Weekly;
