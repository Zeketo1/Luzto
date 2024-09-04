import React, { useState, useEffect, useMemo } from "react";
import Button from "../../utils/Button";
import Countdown from "react-countdown";
import { dealImgs } from "../..";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Completionist = () => <span>Time's up!</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <div className="flex justify-center gap-[10px] font-sans text-[#333]">
        <div className="flex flex-col items-center gap-1">
          <span className="flex items-center justify-center text-[27px] border border-[#ccc] rounded-[10px] p-[5px] text-center min-w-[55px] min-h-[50px] shadow-[0 4px 6px rgba(0, 0, 0, 0.1)]">
            {String(days).padStart(2, "0")}
          </span>
          <span className="text-[.875rem] text-[#777]">Days</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="flex items-center justify-center text-[27px] border border-[#ccc] rounded-[10px] p-[5px] text-center min-w-[55px] min-h-[50px] shadow-[0 4px 6px rgba(0, 0, 0, 0.1)]">
            {String(hours).padStart(2, "0")}
          </span>
          <span className="text-[.875rem] text-[#777]">Hours</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="flex items-center justify-center text-[27px] border border-[#ccc] rounded-[10px] p-[5px] text-center min-w-[55px] min-h-[50px] shadow-[0 4px 6px rgba(0, 0, 0, 0.1)]">
            {String(minutes).padStart(2, "0")}
          </span>
          <span className="text-[.875rem] text-[#777]">Minutes</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="flex items-center justify-center text-[27px] border border-[#ccc] rounded-[10px] p-[5px] text-center min-w-[55px] min-h-[50px] shadow-[0 4px 6px rgba(0, 0, 0, 0.1)]">
            {String(seconds).padStart(2, "0")}
          </span>
          <span className="text-[.875rem] text-[#777]">Seconds</span>
        </div>
      </div>
    );
  }
};

const Deals = () => {
  const countdownDate = useMemo(() => Date.now() + 172800000, []);
  
  return (
    <div className="gap-[50px] md:gap-0 py-[30px] flex flex-col items-center dealGrid w-full bg-white">
      <div className="flex md:justify-center">
        <div className="relative flex flex-col gap-5 lg:items-start items-center">
          <div className="text-[25px] tracking-wide font-serif">
            Deal Of The Month
          </div>
          <div className="text-center lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Scelerisque duis ultrices sollicitudin aliquam sem.
            <br />
            Scelerisque duis ultrices sollicitudin
          </div>
          <Button text="Buy Now" />
          <div>Hurry, Before It’s Too Late!</div>
          <div className="flex justify-center lg:justify-between w-full items-center relative">
            <Countdown date={countdownDate} renderer={renderer}>
              <Completionist />
            </Countdown>
            <div className="hidden lg:flex gap-4 relative -right-5">
              <div className="bg-white shadow-md cursor-pointer p-2 rounded-[50px] swiper-button-prev">
                <FaArrowLeft />
              </div>
              <div className="bg-white shadow-md cursor-pointer p-2 rounded-[50px] swiper-button-next">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center gap-3">
        <Swiper
          effect={"Flip"}
          grabCursor={true}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
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
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full"
        >
          {dealImgs.map((img, i) => (
            <SwiperSlide
              className="flex-shrink-0 h-[370px] w-[280px] rounded-[10px]"
              key={i}
            >
              <img src={img} alt="" className="h-full w-full rounded-[10px]" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="lg:hidden flex gap-4">
          <div className="bg-white shadow-md cursor-pointer p-2 rounded-[50px] swiper-button-prev">
            <FaArrowLeft />
          </div>
          <div className="bg-white shadow-md cursor-pointer p-2 rounded-[50px] swiper-button-next">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
