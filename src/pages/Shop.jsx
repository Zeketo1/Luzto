import React from "react";
import Fashion from "../components/shop/Fashion";
import Sample from "../common/Sample";
import Instagram from "../common/Instagram";
import Subscribe from "../common/Subscribe";


const Shop = () => {
    return (
        <>
            <div className="font-poppins">
                <Fashion />
                <Sample />
                <Instagram />
                <Subscribe />
            </div>
        </>
    );
};

export default Shop;
