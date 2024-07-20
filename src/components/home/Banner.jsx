import React from "react";
import { BannerImg1, BannerImg2, BannerImg3, BannerImg4, bannerLogo } from "../..";
import Button from "../../utils/Button";

const Banner = () => {

    return (
        <div className="flex flex-col items-center w-full py-10 px-2 bg-white mb-5">
            <div className="gap-3 grid grid-cols-2 md:flex">
                <img
                    className="h-[350px] w-full sm:h-[550px] sm:w-full md:h-[600px] md:w-[400px]"
                    src={BannerImg1}
                    alt=""
                />

                <div className="flex flex-col justify-between gap-[10px]">
                    <div
                        className="rounded-[10px] bg-cover bg-center bg-no-repeat block sm:hidden w-full h-[50%] bg-phoneBg"
                    ></div>
                    <img className="hidden sm:block" src={BannerImg3} alt="" />
                    <div className="glass rounded-[10px] p-5 flex flex-col items-center justify-end">
                        <div className="text-[30px] sm:text-[50px] font-mono">
                            ULTIMATE
                        </div>
                        <div className="text-[#f8a89c] text-[40px] sm:text-[80px] font-serif">
                            SALE
                        </div>
                        <Button text="SHOP NOW" />
                    </div>
                    <img className="hidden sm:block" src={BannerImg4} alt="" />
                </div>
                <img
                    className="hidden dude md:h-[600px] md:w-[400px]"
                    src={BannerImg2}
                    alt=""
                />
            </div>
            <div className="flex flex-wrap gap-[20px] py-5 justify-center">
                {bannerLogo.map(({ logo }, i) => (
                    <img
                        className="w-[100px] h-[20px] sm:w-[150px]"
                        key={i}
                        src={logo}
                        alt=""
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;
