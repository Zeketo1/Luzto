import React from "react";
import Banner from "../components/home/Banner";
import Deals from "../components/home/Deals";
import Arrivals from "../components/home/Arrivals";
import Sample from "../common/Sample";
import Instagram from "../common/Instagram";

const Home = () => (
    <div className="bg-[#f5f5f5]">
        <Banner />
        <Deals />
        <Arrivals />
        <Sample />
        <Instagram />
    </div>
);

export default Home;
