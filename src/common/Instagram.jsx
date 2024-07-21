import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { instagramImgs } from "..";

const Instagram = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    const container = (y, delay) => ({
        hidden: { y: y, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: delay },
        },
    });

    return (
        <>
            <div className="bg-white py-16 flex flex-col gap-7">
                <div className="text-center flex flex-col gap-5">
                    <h1 className="text-[27px] font-serif">
                        Follow Us On Instagram
                    </h1>
                    <p className="text-[15px] opacity-70">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Scelerisque duis <br /> ultrices sollicitudin aliquam
                        sem. Scelerisque duis ultrices sollicitudin{" "}
                    </p>
                </div>
                <div className="flex items-center justify-center w-full">
                    {instagramImgs.map(({ image, value, delay }, i) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={container(value, delay)}
                            transition={{ duration: 0.7 }}
                            key={i}
                            className="flex justify-center"
                        >
                            <img
                                src={image}
                                alt=""
                                className="h-full w-[200px]"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Instagram;
