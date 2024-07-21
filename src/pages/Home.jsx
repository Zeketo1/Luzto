import React from "react";
import Banner from "../components/home/Banner";
import Deals from "../components/home/Deals";
import Arrivals from "../components/home/Arrivals";
import Sample from "../common/Sample";
import Instagram from "../common/Instagram";
import Comments from "../common/Comments";
import Subscribe from "../common/Subscribe";
import Footer from "../common/Footer";

const Home = () => (
    <div className="bg-[#f5f5f5]">
        <Banner />
        <Deals />
        <Arrivals />
        <Sample />
        <Instagram />
        <Comments />
        <Subscribe />
        <Footer />
    </div>
);

export default Home;
