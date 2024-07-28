import React, { useContext, useEffect } from "react";
import Banner from "../components/home/Banner";
import Deals from "../components/home/Deals";
import Arrivals from "../components/home/Arrivals";
import Sample from "../common/Sample";
import Instagram from "../common/Instagram";
import Comments from "../common/Comments";
import Subscribe from "../common/Subscribe";
import { LuzContext } from "../Context/LuzContextProvider";

const Home = () => {
    const { setLogsStyle, setNotInAuth } = useContext(LuzContext);

    useEffect(() => {
        setLogsStyle(true);
        setNotInAuth(false);
    }, []);

    return (
        <div className="bg-[#f5f5f5] font-poppins">
            <Banner />
            <Deals />
            <Arrivals />
            <Sample />
            <Instagram />
            <Comments />
            <Subscribe />
        </div>
    );
};

export default Home;
