import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import {
    EffectCoverflow,
    Pagination,
    Navigation,
    Autoplay,
} from "swiper/modules";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { commentImgs } from '..';

const Comments = () => {
  return (
      <>
          <div className="py-16 flex flex-col gap-7">
              <div className="flex flex-col gap-3">
                  <h1 className="text-[23px] font-serif text-center">
                      This is What Our Customers Say
                  </h1>
                  <p className="text-[15px] opacity-70 text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Scelerisque duis
                  </p>
              </div>
              <Swiper
                  effect={"flip"} // Use lowercase for effect names
                  grabCursor={true}
                  spaceBetween={20}
                  centeredSlides={true}
                  autoplay={{
                      delay: 2500, // Adjust the delay as needed
                      disableOnInteraction: false,
                  }}
                  loop={true}
                  slidesPerView={1.2}
                  coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth: 100,
                      modifier: 2,
                  }}
                  pagination={{ el: ".swiper-pagination", clickable: true }}
                  navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                      clickable: true,
                  }}
                  modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                  className="w-full sm:w-[80%] md:w-[70%]"
              >
                  {commentImgs.map(({ image, name, job, comment, star }, i) => (
                      <SwiperSlide
                          className="flex-shrink-0 w-full sm:w-fit rounded-[10px] shadow-lg"
                          key={i}
                      >
                          <div className="flex h-[150px] sm:h-[200px] lg:h-[300px] items-center w-full py-4 px-4 sm:px-10 gap-2 sm:gap-10 bg-white border__radius">
                              <img
                                  src={image}
                                  alt=""
                                  className="h-[90px] sm:h-[100px] md:h-[150px]"
                              />
                              <div className="flex flex-col gap-1 lg:gap-3">
                                  <h1 className="font-serif text-[15px]">
                                      {name}
                                  </h1>
                                  <p className="hidden lg:block text-[14px] opacity-80">
                                      {job}
                                  </p>
                                  <p className="max-w-[370px] text-[12px]">
                                      {comment}
                                  </p>
                                  <div className="hidden sm:block h-[2px] w-[50%] bg-gray-400 opacity-50"></div>
                                  <img
                                      src={star}
                                      alt=""
                                      className="h-[10px] sm:h-[12px] lg:h-[15px] w-fit"
                                  />
                              </div>
                          </div>
                      </SwiperSlide>
                  ))}
              </Swiper>
          </div>
      </>
  );
}

export default Comments