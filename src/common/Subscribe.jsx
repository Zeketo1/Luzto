import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { subscribeImg1, subscribeImg2 } from "..";

const Subscribe = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <>
            <div className="flex justify-center items-center bg-white pt-10 h-[400px] sm:h-[500px] text-center relative">
                <div
                    // ref={ref}
                    // initial={{ x: -400 }}
                    // animate={isInView ? { x: 0 } : { x: -400 }}
                    // transition={{ duration: 0.7 }}
                    className="hidden sm:block"
                >
                    <img
                        src={subscribeImg1}
                        alt=""
                        className="h-[500px] absolute left-2 lg:left-[9rem] top-5"
                    />
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    <h1 className="text-[22px] font-serif">
                        Subscribe To Our Newsletter
                    </h1>
                    <p className="text-[15px] opacity-70">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Scelerisque duis <br /> ultrices sollicitudin aliquam
                        sem. Scelerisque duis ultrices sollicitudin
                    </p>
                    <input
                        className="py-2 px-4 w-[300px] outline-0 input__shadow"
                        type="text"
                        placeholder="michael@ymail.com"
                    />
                    <button className="bg-black text-white py-2 px-5 rounded-md font-thin">
                        Subscribe Now
                    </button>
                </div>
                <div className="hidden sm:block">
                    <img
                        src={subscribeImg2}
                        alt=""
                        className="h-[500px] absolute right-2 lg:right-[9rem] top-5"
                    />
                </div>
            </div>
        </>
    );
};

export default Subscribe;
