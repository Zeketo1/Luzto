import React from "react";
import ShootingStars from "../../utils/ShootingStars";
import { StarsBackground } from "../../utils/ShootingStarBg";
export const ShootingStarsAndStarsBackgroundDemo = ({ className }) => {
    return (
        <div
            className={`${className} h-full bg-black flex flex-col items-center justify-center w-full absolute`}
        >
            <ShootingStars />
            <StarsBackground />
        </div>
    );
};
