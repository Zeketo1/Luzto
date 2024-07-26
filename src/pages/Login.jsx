import React, { useEffect, useRef, useContext, useState } from "react";
import { LuzContext } from "../Context/LuzContextProvider";
import { Link } from "react-router-dom";
import { googleIcon } from "..";
import { ShootingStarsAndStarsBackgroundDemo } from "../components/home/Stars";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { handleLoginForm } from "../firebase";

const Login = () => {
    const ref = useRef(null);
    const ref2 = useRef(null);

    const { setFooter, setLogsActive, setLogsStyle } = useContext(LuzContext);

    useEffect(() => {
        setLogsStyle(false);
        setLogsActive(false);
        setFooter(false);
        setInterval(() => {
            if (ref.current) {
                ref.current.classList.add("translate-x-[100%]");
            }
            if (ref2.current) {
                ref2.current.classList.add("translate-x-[-100%]");
            }
        }, 100);
    }, []);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLoginForm(e, email, password);
        console.log(email, password);
    };

    const [showPass, setShowPass] = useState(true);

    return (
        <div className="lg:grid lg:grid-cols-2 w-full sm:h-[92.15vh] font-poppins">
            <div
                ref={ref}
                className="transition z-10 duration-1000 hidden lg:block bg-loginBg bg-cover bg-center bg-no-repeat bg-white"
            ></div>
            <div
                ref={ref2}
                className="transition duration-1000 hidden lg:block h-full justify-center items-center relative font-poppins"
            >
                <ShootingStarsAndStarsBackgroundDemo />
                <div className="w-full h-full flex flex-col items-center justify-center gap-5 relative text-white">
                    <h1 className="text-[30px] font-bold text-center lg:translate-y-[-20px] text-white">
                        WELCOME BACK
                    </h1>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col items-center w-[50%] gap-5"
                    >
                        <input
                            type="email"
                            placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 placeholder:text-[13px] placeholder-white placeholder:font-semibold outline-0 bg-transparent border-[#fff] border-b"
                        />
                        <div className="flex relative w-full">
                            <input
                                type={showPass ? "password" : "text"}
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-2 placeholder:text-[13px] placeholder-white placeholder:font-semibold outline-0 bg-transparent border-[#fff] border-b"
                            />
                            {showPass ? (
                                <FaRegEye
                                    onClick={() => setShowPass(!showPass)}
                                    className="text-white absolute right-0 top-[35%]"
                                />
                            ) : (
                                <FaRegEyeSlash
                                    onClick={() => setShowPass(!showPass)}
                                    className="text-white absolute right-0 top-[35%]"
                                />
                            )}
                        </div>
                        <button
                            type="submit"
                            className="bg-white py-2 sm:mt-3 w-[80%] rounded-md text-black font-semibold text-[13px]"
                        >
                            Login
                        </button>
                    </form>
                    <Link
                        to="/signup"
                        className="py-2 rounded-md text-[13px] text-[#5B86E5] w-[40%] border border-[#5B86E5]  text-center"
                    >
                        Register NOW
                    </Link>
                    <div className="flex cursor-pointer items-center gap-2 py-2 px-4 rounded-md border-[#8080805c] border">
                        <img src={googleIcon} alt="" className="h-[20px]" />
                        <p className="text-[13px] font-semibold">
                            Login with Google
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative h-full flex lg:hidden justify-center items-center sm:bg-loginBg sm:bg-cover sm:bg-center sm:bg-no-repeat">
                <ShootingStarsAndStarsBackgroundDemo className="sm:hidden absolute" />
                <div className="glassLog relative h-[92vh] w-full flex flex-col items-center justify-center gap-5 py-6 sm:py-3 sm:h-[550px] sm:w-[75%] sm:p-10 ">
                    <h1 className="text-white text-[30px] text-center">
                        WELCOME BACK
                    </h1>
                    <form
                        onSubmit={handleSubmit}
                        className="flex w-full items-center px-[10%] flex-col gap-5"
                    >
                        <input
                            type="email"
                            placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full text-white sm:text-black p-2 placeholder:text-[13px] placeholder-white placeholder:font-semibold outline-0 bg-transparent border-[#fff] border-b"
                        />
                        <div className="flex relative w-full">
                            <input
                                type={showPass ? "password" : "text"}
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full text-white sm:text-black p-2 placeholder:text-[13px] mb-5 sm:mb-0 placeholder-white placeholder:font-semibold outline-0 bg-transparent border-[#fff] border-b"
                            />
                            {showPass ? (
                                <FaRegEye
                                    onClick={() => setShowPass(!showPass)}
                                    className="text-white absolute right-0 top-[35%]"
                                />
                            ) : (
                                <FaRegEyeSlash
                                    onClick={() => setShowPass(!showPass)}
                                    className="text-white absolute right-0 top-[35%]"
                                />
                            )}
                        </div>
                        <button
                            type="submit"
                            className="bg-white py-2 sm:mt-3 w-[75%] rounded-md font-semibold text-[13px] text-black sm:text-white sm:bg-black "
                        >
                            Login
                        </button>
                    </form>
                    <Link
                        to="/signup"
                        className="mb-5 sm:mb-0 py-2 rounded-md text-[13px] text-[#5B86E5] text-semibold w-[60%] border border-[#5B86E5]  text-center"
                    >
                        Register NOW
                    </Link>
                    <div className="flex cursor-pointer items-center gap-2 py-2 px-4 bg-white rounded-md border-[#8080805c] border">
                        <img src={googleIcon} alt="" className="h-[20px]" />
                        <p className="text-[13px] font-semibold">
                            Login with Google
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
