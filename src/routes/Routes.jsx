import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import NavBar from "../common/NavBar";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import { LuzContext } from "../Context/LuzContextProvider";
import Footer from "../common/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Shop from "../pages/Shop";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import PrivateRoutes from "./PrivateRoutes";
import Cart from "../pages/Cart";
import Reviews from "../pages/Reviews";

const PageRoutes = () => {
    const { footer } = useContext(LuzContext);
    const [userActive, setUserActive] = useState();

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUserActive(true);
            } else {
                setUserActive(false);
            }
        });
    }, [userActive]);

    console.log(userActive);

    return (
        <BrowserRouter>
            <NavBar />
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Home />} />
                {!userActive && <Route path="/signup" element={<SignUp />} />}
                {!userActive && <Route path="/login" element={<Login />} />}
                {userActive && <Route path="/shop" element={<Shop />} />}
                <Route path="/shop/:id" element={<PrivateRoutes />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            {footer && <Footer />}
        </BrowserRouter>
    );
};

export default PageRoutes;
