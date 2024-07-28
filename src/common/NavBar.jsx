import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LuzContext } from "../Context/LuzContextProvider";
import { BsArrowLeft } from "react-icons/bs";
import { onAuthStateChanged } from "firebase/auth";
import { auth, logout } from "../firebase";
import { BiLogOut } from "react-icons/bi";

const NavBar = () => {
    const options = ["Home", "Deals", "New Arrivals", "Packages"];
    const { logsStyle, notInAuth } = useContext(LuzContext);

    const [userActive, setUserActive] = useState(false);
    const [profile, setProfile] = useState("");
    const [eProfile, setEProfile] = useState("");

    const handleSignOut = async () => {
        await logout();
    };

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUserActive(true);
                console.log(userActive, user);
                if (user.photoURL) {
                    setProfile(user.photoURL);
                } else if (user.email) {
                    const emailSlice = user.email.slice(0, 1);
                    setEProfile(emailSlice);
                }
            } else {
                setUserActive(false);
                console.log(userActive);
            }
        });
    }, [userActive, profile]);

    console.log(profile);

    return (
        <>
            <div
                className={`font-poppins z-[100] flex justify-between items-center px-3 ${
                    logsStyle ? `glass` : `bg-white`
                } py-1 sticky top-0 right-0`}
            >
                <h1 className="text-[30px] font-serif text-black">Luzto</h1>
                {userActive && (
                    <div className="flex min-[360px]:hidden sm:flex sm:gap-4 md:gap-8 ">
                        {options.map((item, i) => (
                            <span key={i}>{item}</span>
                        ))}
                    </div>
                )}

                {!userActive ? (
                    <div
                        className={`${notInAuth && "flex gap-5 items-center"}`}
                    >
                        {!notInAuth && (
                            <div className="flex gap-8 items-center">
                                <Link to="/login">Sign In</Link>
                                <Link
                                    to="/signup"
                                    className={`bg-black text-white text-sm w-fit py-2 px-5 sm:py-3 sm:px-7 rounded-[10px]`}
                                >
                                    Sign Up
                                </Link>
                            </div>
                        )}
                        {!userActive && notInAuth && (
                            <Link
                                to="/"
                                className="border border-black text-black rounded-[50%] h-[30px] w-[30px] flex items-center justify-center"
                            >
                                <BsArrowLeft />
                            </Link>
                        )}
                    </div>
                ) : (
                    <div className="flex gap-5 items-center">
                        <BiLogOut onClick={handleSignOut} />
                        {profile.length === 0 ? (
                            <div className="h-[35px] w-[35px] rounded-[50%] bg-blue-700 text-white flex items-center justify-center">
                                <div className="text-[20px]">{eProfile}</div>
                            </div>
                        ) : (
                            <img
                                src={profile}
                                alt=""
                                className="h-[35px] w-[35px] rounded-[50%]"
                            />
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default NavBar;
