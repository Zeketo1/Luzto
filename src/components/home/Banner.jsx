import React from "react";
import {
    BannerImg1,
    BannerImg2,
    BannerImg3,
    BannerImg4,
    bannerLogo,
} from "../..";
import Button from "../../utils/Button";
import { motion } from "framer-motion";

const Banner = () => {
    // const container = (x, delay) => ({
    //     hidden: { x: x, opacity: 0 },
    //     visible: {
    //         x: 0,
    //         opacity: 1,
    //         transition: { duration: 0.5, delay: delay },
    //     },
    // });

    return (
        <div className="flex flex-col items-center w-full py-10 px-2 bg-white mb-5">
            <div className="gap-3 grid grid-cols-2 md:flex">
                <motion.img
                    initial={{ rotate: -15, x: -100 }}
                    animate={{ rotate: 0, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="h-[350px] w-full sm:h-[550px] sm:w-full md:h-[600px] md:w-[400px]"
                    src={BannerImg1}
                    alt=""
                />

                <div className="flex flex-col justify-between gap-[10px]">
                    <motion.div
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="rounded-[10px] bg-cover bg-center bg-no-repeat block sm:hidden w-full h-[50%] bg-phoneBg"
                    ></motion.div>
                    <motion.img
                        className="hidden sm:block"
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.7 }}
                        src={BannerImg3}
                        alt=""
                    />
                    <div className="glass rounded-[10px] p-5 flex flex-col items-center justify-end">
                        <div className="text-[30px] sm:text-[50px] font-mono">
                            ULTIMATE
                        </div>
                        <div className="text-[#f8a89c] text-[40px] sm:text-[80px] font-serif">
                            SALE
                        </div>
                        <Button text="SHOP NOW" />
                    </div>
                    <motion.img
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="hidden sm:block"
                        src={BannerImg4}
                        alt=""
                    />
                </div>
                <motion.img
                    initial={{ rotate: 15, x: 100 }}
                    animate={{ rotate: 0, x: 0 }}
                    transition={{ duration: 0.7 }}
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
