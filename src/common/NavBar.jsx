import React, { useContext, useState } from "react";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import { LuzContext } from "../Context/LuzContextProvider";
import { BsArrowLeft } from "react-icons/bs";

const NavBar = () => {
    const options = ["Home", "Deals", "New Arrivals", "Packages"];
    const [num, setnum] = useState(1);
    const { logsActive, logsStyle } = useContext(LuzContext);

    return (
        <>
            <div
                className={`font-poppins z-[100] flex justify-between items-center px-3 ${
                    logsStyle ? `glass` : `bg-white`
                } py-1 sticky top-0 right-0`}
            >
                <h1 className="text-[30px] font-serif text-black">Luzto</h1>
                {num < 1 && (
                    <div className="flex min-[360px]:hidden sm:flex sm:gap-4 md:gap-8 ">
                        {options.map((item, i) => (
                            <span key={i}>{item}</span>
                        ))}
                    </div>
                )}
                {logsActive ? (
                    <div className="flex gap-8 items-center">
                        <Link to="/login">Sign In</Link>
                        <Link
                            to="/signup"
                            className={`bg-black text-white text-sm w-fit py-2 px-5 sm:py-3 sm:px-7 rounded-[10px]`}
                        >
                            Sign Up
                        </Link>
                    </div>
                ) : (
                    <Link
                        to="/"
                        className="border border-black text-black p-1 rounded-[50%]"
                    >
                        <BsArrowLeft />
                    </Link>
                )}
            </div>
        </>
    );
};

export default NavBar;
