import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { arrivalFilter } from "../components/home/products";
import { LuzContext } from "../Context/LuzContextProvider";
import { fashionImgs } from "../components/shop/fashionProducts";
import { CiCircleQuestion, CiDeliveryTruck } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { BsBox2 } from "react-icons/bs";
import { CartContext } from "../Context/CartContextProvider";

const PrivateRoutes = () => {
    const { id } = useParams();
    const { inShop } = useContext(LuzContext);
    const { addToCart, cartItems } = useContext(CartContext);

    const [itemFilter, setItemFilter] = useState(fashionImgs);

    useEffect(() => {
        inShop ? setItemFilter(fashionImgs) : setItemFilter(arrivalFilter);

        console.log(typeof pageContent);
        console.log(id);
    }, [itemFilter]);

    const pageContent = itemFilter.find((item) => item.name == id);

    const [size, setSize] = useState("M");
    const [activeSize, setActiveSize] = useState(0);

    const sizez = ["M", "L", "XL", "XXL"];

    const [quantity, setQuantity] = useState(1);

    const [currentDate, setCurrentDate] = useState("");
    const [duration, setDuration] = useState("");

    useEffect(() => {
        const date = new Date();
        const options = { month: "short", day: "numeric" };

        setCurrentDate(date.toLocaleDateString(undefined, options));
    }, []);

    useEffect(() => {
        const durationFun = (days) => {
            const date = new Date();
            date.setDate(date.getDate() + days);
            const options = { month: "short", day: "numeric" };
            return date.toLocaleDateString(undefined, options);
        };

        setDuration(durationFun(3));
    }, []);

    console.log(cartItems);

    return (
        <>
            <div className="flex justify-center font-poppins">
                <div className="flex flex-col sm:grid sm:grid-cols-2 p-5 lg:w-[70%] gap-10">
                    <div className="flex justify-center w-full h-full">
                        <img
                            src={inShop ? pageContent.img : pageContent.image}
                            alt=""
                            className="max-h-[315px] sm:max-h-[600px]"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="opacity-80 text-[14px] sm:text-[16px]">
                            {pageContent.Brand}
                        </p>
                        <h1 className="font-semibold sm:text-[25px]">
                            {pageContent.name}
                        </h1>
                        <p>${pageContent.price}</p>
                        <div className="flex flex-col gap-2">
                            <p className="font-bold">
                                Size:{" "}
                                <span className="font-semibold font-serif">
                                    {size}
                                </span>
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {sizez.map((item, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setActiveSize(i)}
                                        className={`${
                                            i == activeSize &&
                                            "bg-black text-white"
                                        } cursor-pointer rounded-[4px] h-[30px] flex items-center justify-center w-[32px] border border-gray-700 shadow-md`}
                                    >
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-end gap-5">
                            <div className="flex flex-col gap-3">
                                <p>Quantity</p>
                                <div className="flex items-center gap-7 border-2 border-gray-200 w-fit rounded-sm px-3 py-[5px]">
                                    <span
                                        className="text-[17px] cursor-pointer"
                                        onClick={() => {
                                            quantity < 1
                                                ? setQuantity(0)
                                                : setQuantity((q) => q - 1);
                                        }}
                                    >
                                        -
                                    </span>
                                    <span>{quantity}</span>
                                    <span
                                        className="text-[17px] cursor-pointer"
                                        onClick={() =>
                                            setQuantity((q) => q + 1)
                                        }
                                    >
                                        +
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => addToCart(pageContent)}
                                className="w-full sm:w-[50%] h-fit text-center border p-[6px] rounded-sm border-black"
                            >
                                Add To Cart
                            </button>
                        </div>
                        <div className="flex gap-5 sm:gap-10 items-center flex-wrap">
                            <div className="flex items-center gap-2 cursor-pointer">
                                <CiCircleQuestion className="text-[20px]" />
                                <span>Ask a question</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <IoShareSocialOutline className="text-[20px]" />
                                <span>Share</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex font-bold gap-2 items-center">
                                <CiDeliveryTruck className="text-[20px]" />
                                <span>
                                    Estimated Delivery:{" "}
                                    <span className="font-normal">
                                        {currentDate}
                                    </span>{" "}
                                    -{" "}
                                    <span className="font-normal">
                                        {duration}
                                    </span>
                                </span>
                            </div>
                            <div className="flex font-bold gap-2 items-center">
                                <BsBox2 className="text-[16px]" />
                                <span>
                                    Free Shipping & Returns:{" "}
                                    <span className="font-normal">
                                        On all orders over
                                    </span>{" "}
                                    $75
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivateRoutes;
