import React, { createContext, useState, useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import NavBar from "../common/NavBar";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import { LuzContext } from "../Context/LuzContextProvider";
import Footer from "../common/Footer";
import { ShootingStarsAndStarsBackgroundDemo } from "../components/home/Stars";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const PageRoutes = () => {
    const { footer } = useContext(LuzContext);
    // const navigate = useNavigate("/");
    // const [userActive, setUserActive] = useState(false)

    // useEffect(() => {
    //     onAuthStateChanged(auth, async (user) => {
    //         if (user) {
    //             console.log(user);
    //             setUserActive(true)
    //             // setUserLogged(true);
    //             // useNavigate("/")
    //             // console.log(userLogged);
    //         }
    //     });
    // });

    // {userActive && navigate()}

    return (
        <BrowserRouter>
            <NavBar />
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/stars"
                    element={<ShootingStarsAndStarsBackgroundDemo />}
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
            {footer && <Footer />}
        </BrowserRouter>
    );
};

export default PageRoutes;
