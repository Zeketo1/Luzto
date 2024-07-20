import React from "react";
import { sampleIcons, sampleImg } from "..";

const Sample = () => {
    return (
        <>
            <div className="bg-white flex flex-col gap-16 pb-5">
                <div className="flex flex-col gap-5 sm:gap-0 sm:grid shape__grid sm:h-[430px] md:h-[450px] lg:h-[500px] bg-[#DADADA]">
                    <div className="bg-[#F8F8F8] h-full w-full left__shape">
                        <img
                            src={sampleImg}
                            alt=""
                            className="sm:h-[430px] md:h-[450px] lg:h-[500px]"
                        />
                    </div>
                    <div className="h-[420px] sm:h-full w-full right__shape pl-5 flex items-center">
                        <div className="flex flex-col gap-3 lg:gap-5">
                            <p className="opacity-80 text-[14px]">
                                Women Collection
                            </p>
                            <h1 className="md:my-2 text-[23px] md:text-[30px] font-serif">
                                Peaky Blinders
                            </h1>
                            <p className="font-semibold underline">
                                DESCRIPTION
                            </p>
                            <p className="opacity-80 text-[15px] lg:text-[17px]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. <br /> Scelerisque duis
                                ultrices sollicitudin aliquam sem. Scelerisque{" "}
                                <br /> duis ultrices sollicitudin. Lorem ipsum
                                dolor sit amet, consectetur <br /> adipiscing
                                elit. Scelerisque duis.
                            </p>
                            <div className="flex items-center gap-2">
                                <span>Size:</span>
                                <span className="bg-black text-white py-[2px] px-4 rounded-xl">
                                    M
                                </span>
                            </div>
                            <p className="font-semibold">
                                $100.<span className="text-[13px]">00</span>
                            </p>
                            <p className="bg-black py-2 px-10 cursor-pointer rounded-md w-fit text-white text-[13px]">
                                Buy Now
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex shadow-xl justify-around flex-wrap gap-10 py-5 md:py-10">
                    {sampleIcons.map(({ icon, title, text }) => (
                        <div className="flex items-center gap-2 md:gap-4">
                            <img
                                src={icon}
                                alt=""
                                className="h-[35px] md:h-[40px]"
                            />
                            <div className="flex flex-col justify-center">
                                <h3 className="text-[14px] font-san font-semibold">
                                    {title}
                                </h3>
                                <p className="text-[13px]">{text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Sample;
