import React, { useContext, useEffect } from "react";
import Fashion from "../components/shop/Fashion";
import Sample from "../common/Sample";
import Instagram from "../common/Instagram";
import Subscribe from "../common/Subscribe";
import { LuzContext } from "../Context/LuzContextProvider";

const Shop = () => {
    const { setInShop } = useContext(LuzContext);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setInShop(true);
    }, []);

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
