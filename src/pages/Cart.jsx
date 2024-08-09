import React, { useContext } from "react";
import { CartContext } from "../Context/CartContextProvider";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Cart = () => {
    const {
        cartItems,
        getTotalPriceAmount,
        removeFromCart,
        reduceProductQuantity,
        addProductQuantity,
    } = useContext(CartContext);
    console.log(cartItems);
    return (
        <>
            <div className="font-poppins">
                <div className="flex items-center justify-center text-[70px] font-serif text-white h-[350px] bg-cartBg bg-bottom bg-cover bg-no-repeat">
                    CART
                </div>
                <div
                    className={`min-h-[260px] md:min-h-[560px] lg:min-h-[260px] ${
                        cartItems.length > 0
                            ? "flex flex-col lg:flex-row lg:justify-between lg:gap-5 xl:gap-8 xl:p-5 2xl:gap-16 2xl:p-14"
                            : "flex items-center justify-center"
                    } w-[100%]`}
                >
                    <div
                        className={`${
                            cartItems.length === 0 && "hidden"
                        } flex flex-col w-full`}
                    >
                        {cartItems.map((cartItem) => (
                            <div key={cartItem.name} className={"w-[100%]"}>
                                <div className="flex items-center justify-between w-full py-4 px-2 sm:p-4">
                                    {/* <div className="flex items-center gap-5"> */}
                                    <img
                                        className="h-[98px] w-[83px] sm:w-[92px] sm:h-[112px]"
                                        src={
                                            cartItem.image
                                                ? cartItem.image
                                                : cartItem.img
                                        }
                                        alt=""
                                    />
                                    {/* </div> */}
                                    <span className="line-clamp-1 font-semibold text-[12px] uppercase productName">
                                        {cartItem.name}
                                    </span>
                                    <span className="font-sans productPrice">
                                        ${cartItem.price}
                                    </span>
                                    <button className="flex gap-4 sm:gap-12 px-2 py-2 border text-[.8rem] text-[#999]">
                                        <span>Quantity</span>
                                        <span className="flex items-center gap-4">
                                            <IoMdArrowDropleft
                                                onClick={() =>
                                                    reduceProductQuantity(
                                                        cartItem.name
                                                    )
                                                }
                                            />
                                            <span>{cartItem.quantity}</span>
                                            <IoMdArrowDropright
                                                onClick={() =>
                                                    addProductQuantity(
                                                        cartItem.name
                                                    )
                                                }
                                            />
                                        </span>
                                    </button>
                                    <span className="font-sans">
                                        ${cartItem.price * cartItem.quantity}
                                    </span>
                                    <RxCross2
                                        onClick={() =>
                                            removeFromCart(cartItem.name)
                                        }
                                    />
                                </div>
                                <div className="mb-51 border"></div>
                            </div>
                        ))}
                    </div>
                    {cartItems.length === 0 ? (
                        <h1>NO ITEMS IN YOUR CART</h1>
                    ) : (
                        <div className="md:top-28 md:sticky flex flex-col justify-around bg-[#f3f3f3] p-[35px] w-full lg:w-[45%] 2xl:w-[30%] h-[25rem]">
                            <h1 className="font-semibold text-[1.2rem] tracking-[.2rem]">
                                CART TOTALS
                            </h1>
                            <div className="flex flex-col gap-3 tracking-[.1rem]">
                                <div className="flex justify-between">
                                    <span>SUBTOTAL</span>
                                    <span className="font-sans">
                                        {getTotalPriceAmount()[0]}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>DELIVERY FEE</span>
                                    <span className="font-sans">$5</span>
                                </div>
                            </div>
                            <div>
                                <div className="mb-4 border"></div>
                                <div>
                                    <div className="relative top-3 flex justify-between items-center mb-4 font-bold">
                                        <span>TOTAL</span>
                                        <span className="font-sans text-[24px]">
                                            {getTotalPriceAmount()[1]}
                                        </span>
                                    </div>
                                    <button className="text-center relative top-6 flex justify-center items-center bg-black text-[14px] xl:text-[16px] sm:px-10 py-3 w-full 2xl:max-w-[20rem] text-white">
                                        PROCEED TO CHECKOUT
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;
