import React from "react";

const Button = ({ text, cust }) => {
    return (
        <button
            className={`bg-black ${
                cust && cust
            } text-white text-sm w-fit py-2 px-5 sm:py-3 sm:px-7 rounded-[10px]`}
        >
            {text}
        </button>
    );
};

export default Button;
