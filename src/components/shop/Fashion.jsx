import React, { useEffect, useState } from "react";
import { MdArrowDropDown, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { fashionImgs } from "./fashion";

const Fashion = () => {
    // Fashion
    const fashionImgsSlice1 = fashionImgs.slice(0, 8);
    const fashionImgsSlice2 = fashionImgs.slice(8, 16);
    const fashionImgsSlice3 = fashionImgs.slice(16, 24);

    const mapFashionOption = [
        fashionImgsSlice1,
        fashionImgsSlice2,
        fashionImgsSlice3,
    ];

    // Price
    const [fashionImgsPrice, setFashionImgsPrice] = useState([]);
    const priceImgsSlice1 = fashionImgsPrice.slice(0, 8);
    const priceImgsSlice2 = fashionImgsPrice.slice(8, 16);

    const priceImgsSlice3 = fashionImgsPrice.slice(16, 24);
    const mapPriceOption = [priceImgsSlice1, priceImgsSlice2, priceImgsSlice3];

    const fashionImgsPriceFunction = (price, price2) => {
        const answer = fashionImgs.filter(
            (item) => item.price > price && item.price <= price2
        );
        setFashionImgsPrice(answer);
    };

    // NavBTN
    const numNext = [1, 2, 3];
    const [numClicked, setNumClicked] = useState(0);
    const [condition, setCondition] = useState(false);
    const itemsToRender = condition
        ? mapPriceOption[numClicked]
        : mapFashionOption[numClicked];

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
                <h3 className="text-[20px] font-semibold sm:px-5 md:px-10 xl:px-200 mb-3">
                    Filters
                </h3>
                <div className="fashion__products__grid sm:px-2 md:px-5 xl:px-20">
                    <div className="flex flex-col gap-4 filter__display">
                        <div className="flex flex-col gap-3">
                            <p>Size:</p>
                            <div className="flex flex-wrap gap-3 opacity-70">
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
                        {/* <div className="flex flex-col gap-3">
                            <p>Color:</p>
                            <div className="flex flex-wrap gap-3 opacity-70">
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
                        </div> */}
                        <div className="flex flex-col gap-3">
                            <p>Prices:</p>
                            <div>
                                <div
                                    onClick={() => {
                                        fashionImgsPriceFunction(0, 50);
                                        setCondition(true);
                                    }}
                                    className="tracking-tight text-[18px] opacity-70 cursor-pointer"
                                >
                                    $0-$50
                                </div>
                                <div
                                    onClick={() => {
                                        fashionImgsPriceFunction(50, 100);
                                        setCondition(true);
                                    }}
                                    className="tracking-tight text-[18px] opacity-70 cursor-pointer"
                                >
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
                    <div className="flex flex-col w-full">
                        <div className="flex items-center cursor-pointer mb-2">
                            <div>Best Selling </div>
                            <MdArrowDropDown />
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex flex-wrap justify-center w-full gap-5">
                                {itemsToRender.map(
                                    ({ img, text, price }, i) => (
                                        <div
                                            key={i}
                                            className="flex flex-col gap-2"
                                        >
                                            <img
                                                src={img}
                                                alt=""
                                                className="h-[250px] w-[200px] sm:h-[300px] sm:w-[240px] xl:h-[270px] xl:w-[230px]"
                                            />
                                            <div>
                                                <p className="font-semibold">
                                                    {text}
                                                </p>
                                                <p className="opacity-80">
                                                    ${price}.00
                                                </p>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                            <div className="flex gap-2 mt-4">
                                {numNext.map((num, i) => (
                                    <p
                                        onClick={() => setNumClicked(i)}
                                        key={i}
                                        className="h-[25px] flex justify-center items-center cursor-pointer w-[25px] rounded-[50%] bg-gray-200"
                                    >
                                        {num}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Fashion;
