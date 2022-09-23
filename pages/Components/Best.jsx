import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import axios from "axios";
const Best = () => {
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
  const getAnswer = async () => {
    const { data } = await axios(
      "https://tasty.p.rapidapi.com/feeds/list",
      options
    );
    setVal(data.results[2].items);
    setLoading(true);
  };
  useEffect(() => {
    getAnswer();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-44 flex items-center justify-center flex-col mt-5 px-5">
          <p className="w-full font-Montserrat font-semibold mb-2">Trend Recipes</p>
        <Swiper
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper w-full h-full"
        >
          {val.length > 0 &&
            val.map((val) => (
              <SwiperSlide
                key={val.id}
                className="w-full h-full flex items-center justify-center"
              >
                <a href={val.original_video_url} className="w-full h-full flex items-center justify-center flex-col">
                  <div className="w-full h-4/5 flex items-center justify-center relative">
                    <img
                      src={val.thumbnail_url}
                      className="w-full h-full object-cover flex items-center justify-center rounded-t-2xl"
                    />
                  </div>
                  <p className="w-full h-1/5 text-center flex items-center justify-center z-20 font-Montserrat font-semibold text-base mt-2">
                    {val.name}
                  </p>
                </a>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    );
  } else {
    return "Loading...";
  }
};

export default Best;
