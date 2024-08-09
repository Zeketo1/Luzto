import React, { useContext, useEffect, useState } from "react";
import { MdArrowDropDown, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { fashionImgs } from "./fashionProducts";
import { LuzContext } from "../../Context/LuzContextProvider";

const Fashion = () => {
    const {setInShop} = useContext(LuzContext)
    // Fashion
    const fashionImgsSlice1 = fashionImgs.slice(0, 8);
    const fashionImgsSlice2 = fashionImgs.slice(8, 16);
    const fashionImgsSlice3 = fashionImgs.slice(16, 24);
    const fashionImgsSlice4 = fashionImgs.slice(24, 32);
    const fashionImgsSlice5 = fashionImgs.slice(32, 40);

    const mapFashionOption = [
        fashionImgsSlice1,
        fashionImgsSlice2,
        fashionImgsSlice3,
        fashionImgsSlice4,
        fashionImgsSlice5,
    ];

    // Price
    const [fashionImgsPrice, setFashionImgsPrice] = useState([]);
    const priceImgsSlice1 = fashionImgsPrice.slice(0, 6);
    const priceImgsSlice2 = fashionImgsPrice.slice(6, 12);
    const priceImgsSlice3 = fashionImgsPrice.slice(12, 18);
    const priceImgsSlice4 = fashionImgsPrice.slice(18, 24);

    const mapPriceOption = [
        priceImgsSlice1,
        priceImgsSlice2,
        priceImgsSlice3,
        priceImgsSlice4,
    ];

    const fashionImgsPriceFunction = (price, price2) => {
        const answer = fashionImgs.filter(
            (item) => item.price > price && item.price <= price2
        );
        setFashionImgsPrice(answer);
    };

    // Tags
    const [fashionImgsTags, setFashionImgsTags] = useState([]);
    const tagsImgsSlice1 = fashionImgsTags.slice(0, 6);
    const tagsImgsSlice2 = fashionImgsTags.slice(6, 12);
    const tagsImgsSlice3 = fashionImgsTags.slice(12, 18);
    const tagsImgsSlice4 = fashionImgsTags.slice(18, 24);

    const mapTagsOption = [
        tagsImgsSlice1,
        tagsImgsSlice2,
        tagsImgsSlice3,
        tagsImgsSlice4,
    ];

    const fashionImgsTagsFunction = (tag) => {
        const answer = fashionImgs.filter((item) => item.Brand === tag);
        console.log(tag);
        setFashionImgsTags(answer);
    };

    // console.log(fashionImgsTags);

    // NavBTN

    const [numClicked, setNumClicked] = useState(0);
    const [numClicked2, setNumClicked2] = useState(0);
    const [condition, setCondition] = useState(false);
    const [condition2, setCondition2] = useState(true);

    // Filters -_-

    const filterRender = condition2
        ? mapPriceOption[numClicked2]
        : mapTagsOption[numClicked2];

    const filterNav = condition2 ? fashionImgsPrice : fashionImgsTags;

    const itemsToRender = condition
        ? filterRender
        : mapFashionOption[numClicked];

    console.log(filterNav.length);

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
                                        setCondition2(true);
                                    }}
                                    className="tracking-tight text-[18px] opacity-70 cursor-pointer"
                                >
                                    $0-$50
                                </div>
                                <div
                                    onClick={() => {
                                        fashionImgsPriceFunction(50, 100);
                                        setCondition(true);
                                        setCondition2(true);
                                    }}
                                    className="tracking-tight text-[18px] opacity-70 cursor-pointer"
                                >
                                    $50-$100
                                </div>
                                <div
                                    onClick={() => {
                                        fashionImgsPriceFunction(100, 150);
                                        setCondition(true);
                                        setCondition2(true);
                                    }}
                                    className="tracking-tight text-[18px] opacity-70 cursor-pointer"
                                >
                                    $100-$150
                                </div>
                                <div
                                    onClick={() => {
                                        fashionImgsPriceFunction(150, 200);
                                        setCondition(true);
                                        setCondition2(true);
                                    }}
                                    className="tracking-tight text-[18px] opacity-70 cursor-pointer"
                                >
                                    $150-$200
                                </div>
                                <div
                                    onClick={() => {
                                        fashionImgsPriceFunction(200, 10000);
                                        setCondition(true);
                                        setCondition2(true);
                                    }}
                                    className="tracking-tight text-[18px] opacity-70 cursor-pointer"
                                >
                                    $200- Above
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p>Brands:</p>
                            <div className="flex flex-wrap w-[70%] gap-4 opacity-70">
                                <p
                                    onClick={() => {
                                        fashionImgsTagsFunction("Dior");
                                        setCondition2(false);
                                        setCondition(true);
                                    }}
                                    className="cursor-pointer"
                                >
                                    Dior
                                </p>
                                <p
                                    onClick={() => {
                                        fashionImgsTagsFunction("Gucci");
                                        setCondition2(false);
                                        setCondition(true);
                                    }}
                                    className="cursor-pointer"
                                >
                                    Gucci
                                </p>
                                <p
                                    onClick={() => {
                                        fashionImgsTagsFunction("Brook");
                                        setCondition2(false);
                                        setCondition(true);
                                    }}
                                    className="cursor-pointer"
                                >
                                    Brook
                                </p>
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
                            <div onClick={() => setCondition(false)}>
                                Best Selling{" "}
                            </div>
                            <MdArrowDropDown />
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex flex-wrap justify-center w-fit gap-5">
                                {itemsToRender.map(
                                    ({ img, name, price }, i) => (
                                        <Link
                                            to={`/shop/${name}`}
                                            key={i}
                                            className="flex flex-col gap-2"
                                            onClick={() => setInShop(true)}
                                        >
                                            <img
                                                src={img}
                                                alt=""
                                                className="h-[270px] w-[240px] sm:h-[300px] sm:w-[240px] xl:h-[270px] xl:w-[230px]"
                                            />
                                            <div>
                                                <p className="font-semibold">
                                                    {name}
                                                </p>
                                                <p className="opacity-80">
                                                    ${price}.00
                                                </p>
                                            </div>
                                        </Link>
                                    )
                                )}
                            </div>
                            {condition ? (
                                <div className="flex gap-2 mt-4">
                                    <p
                                        onClick={() => setNumClicked2(0)}
                                        className="h-[25px] flex justify-center items-center cursor-pointer w-[25px] rounded-[50%] bg-gray-200"
                                    >
                                        1
                                    </p>
                                    {filterNav.length > 6 && (
                                        <p
                                            onClick={() => setNumClicked2(1)}
                                            className="h-[25px] flex justify-center items-center cursor-pointer w-[25px] rounded-[50%] bg-gray-200"
                                        >
                                            2
                                        </p>
                                    )}
                                    {filterNav.length > 12 && (
                                        <p
                                            onClick={() => setNumClicked2(2)}
                                            className="h-[25px] flex justify-center items-center cursor-pointer w-[25px] rounded-[50%] bg-gray-200"
                                        >
                                            3
                                        </p>
                                    )}
                                    {filterNav.length > 18 && (
                                        <p
                                            onClick={() => setNumClicked2(3)}
                                            className="h-[25px] flex justify-center items-center cursor-pointer w-[25px] rounded-[50%] bg-gray-200"
                                        >
                                            4
                                        </p>
                                    )}
                                </div>
                            ) : (
                                <div className="flex gap-2 mt-4">
                                    <p
                                        onClick={() => setNumClicked(0)}
                                        className="h-[25px] flex justify-center items-center cursor-pointer w-[25px] rounded-[50%] bg-gray-200"
                                    >
                                        1
                                    </p>
                                    <p
                                        onClick={() => setNumClicked(1)}
                                        className="h-[25px] flex justify-center items-center cursor-pointer w-[25px] rounded-[50%] bg-gray-200"
                                    >
                                        2
                                    </p>
                                    <p
                                        onClick={() => setNumClicked(2)}
                                        className="h-[25px] flex justify-center items-center cursor-pointer w-[25px] rounded-[50%] bg-gray-200"
                                    >
                                        3
                                    </p>
                                    <p
                                        onClick={() => setNumClicked(3)}
                                        className="h-[25px] flex justify-center items-center cursor-pointer w-[25px] rounded-[50%] bg-gray-200"
                                    >
                                        4
                                    </p>
                                    <p
                                        onClick={() => setNumClicked(4)}
                                        className="h-[25px] flex justify-center items-center cursor-pointer w-[25px] rounded-[50%] bg-gray-200"
                                    >
                                        5
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Fashion;
