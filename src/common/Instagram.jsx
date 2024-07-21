import React from "react";

import { instagramImgs } from "..";

const Instagram = () => {
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
                    {instagramImgs.map((item, i) => (
                        <div className="flex justify-center">
                            <img
                                key={i}
                                src={item}
                                alt=""
                                className="h-full w-[200px]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Instagram;
