import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NavBar from "../common/NavBar";

const PageRoutes = () => (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
);

export default PageRoutes;
