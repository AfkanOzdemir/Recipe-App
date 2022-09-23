import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
const Drinks = () => {
  const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {from: '0', size: '20', tags: 'drinks'},
    headers: {
      'X-RapidAPI-Key': 'a07fdf20e0msh71fe74cf184f15ap1e4eaejsnc58e71ec4984',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };
  
  const [loading, setLoading] = useState(false);
  const [val, setVal] = useState();
  const getAnswer = async () => {
    const { data } = await axios(
      "https://tasty.p.rapidapi.com/recipes/list",
      options
    );
    setVal(data.results);
    console.log(data)
    setLoading(true);
  };
  useEffect(() => {
    getAnswer();
  }, []);
  if (loading) {
    return (
      <div className="w-full h-48 flex items-center justify-center flex-col mt-5 px-5">
        <p className="w-full font-Montserrat font-semibold mb-2">
          Most Popular Drinks
        </p>
        <Swiper
          slidesPerView={3}
          spaceBetween={15}
          slidesPerGroup={3}
          loopFillGroupWithBlank={true}
          className="mySwiper w-full h-full"
        >
          {val.length > 0 &&
            val.map((val) => (
              <SwiperSlide
                key={val.id}
                className="w-full h-full flex items-start justify-start"
              >
                <a
                  href={val.original_video_url}
                  className="w-full h-full flex items-center justify-center flex-col"
                >
                  <div className="w-full h-4/5 flex items-center justify-center relative">
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
  else{return "Loading Drinks"}
};


export default Drinks;
