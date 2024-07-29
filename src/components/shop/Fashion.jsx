import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Fashion = () => {
    return (
        <>
            <div className="py-10">
                <h1 className="text-[30px] font-semibold text-center">
                    Fashion
                </h1>
                <div className="flex justify-center items-center gap-1">
                    <Link to="/">Home</Link>
                    <MdKeyboardArrowRight />
                    <p>Fashion</p>
                </div>
                <div className="fashion__products__grid px-20">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[20px] font-semibold">Filters</h3>
                        <div className="flex flex-col gap-3">
                            <p>Size:</p>
                            <div className="grid grid-cols-3 w-[40%] gap-3 opacity-70">
                                <div className="h-[30px] flex items-center justify-center w-[30px] border border-gray-700 shadow-md">
                                    <p>S</p>
                                </div>
                                <div className="h-[30px] flex items-center justify-center w-[30px] border border-gray-700 shadow-md">
                                    <p>M</p>
                                </div>
                                <div className="h-[30px] flex items-center justify-center w-[30px] border border-gray-700 shadow-md">
                                    <p>L</p>
                                </div>
                                <div className="h-[30px] flex items-center justify-center w-[30px] border border-gray-700 shadow-md">
                                    <p>XL</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p>Color:</p>
                            <div className="grid grid-cols-7 gap-3 opacity-70">
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#FF6C6C]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#FF7629]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#FFF06C]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#9BFF6C]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#6CFF9E]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#6CFFDC]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#6CB9FF]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#6CF6FF]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#6CA7FF]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#6C7BFF]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#8A6CFF]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#B66CFF]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#FC6CFF]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#FF6C6C]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p>Prices:</p>
                            <div>
                                <div className="tracking-tight text-[18px] opacity-70">
                                    $0-$50
                                </div>
                                <div className="tracking-tight text-[18px] opacity-70">
                                    $50-$100
                                </div>
                                <div className="tracking-tight text-[18px] opacity-70">
                                    $100-$150
                                </div>
                                <div className="tracking-tight text-[18px] opacity-70">
                                    $150-$200
                                </div>
                                <div className="tracking-tight text-[18px] opacity-70">
                                    $300-$400
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p>Brands:</p>
                            <div className="flex flex-wrap w-[70%] gap-4 opacity-70">
                                <p>Minimog</p>
                                <p>Retrolie</p>
                                <p>Brook</p>
                                <p>Learts</p>
                                <p>Vagabond</p>
                                <p>Abby</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p>Collection:</p>
                            <div className="flex flex-col gap-2 opacity-70">
                                <p>All products</p>
                                <p>Best sellers</p>
                                <p>New arrivals</p>
                                <p>Accessories</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p>Tags:</p>
                            <div className="flex flex-wrap gap-3 opacity-70">
                                <p>Fashion</p>
                                <p>Hats</p>
                                <p>Sandal</p>
                                <p>Belt</p>
                                <p>Bags</p>
                                <p>Snacker</p>
                                <p>Denim</p>
                                <p>Minimog</p>
                                <p>Vagabond</p>
                                <p>Sunglasses</p>
                                <p>Beachwears</p>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    );
};

export default Fashion;
