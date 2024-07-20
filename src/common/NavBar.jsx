import React, { useState } from "react";
import Button from "../utils/Button";

const NavBar = () => {
    const options = ["Home", "Deals", "New Arrivals", "Packages"];
    const [num, setnum] = useState(1);
    return (
        <>
            <div className="z-[100] flex justify-between items-center px-3 glass py-1 sticky top-0 right-0">
                <h1 className="text-[30px] font-serif">Luzto</h1>
                {num < 1 && (
                    <div className="flex min-[360px]:hidden sm:flex sm:gap-4 md:gap-8 ">
                        {options.map((item, i) => (
                            <span key={i}>{item}</span>
                        ))}
                    </div>
                )}
                <div className="flex gap-8 items-center">
                    <div>Sign In</div>
                    <Button text="Sign Up" />
                </div>
            </div>
        </>
    );
};

export default NavBar;
