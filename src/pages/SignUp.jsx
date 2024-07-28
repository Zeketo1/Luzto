import React, { useState, useEffect, useRef, useContext } from "react";
import { LuzContext } from "../Context/LuzContextProvider";
import { Link } from "react-router-dom";
import { googleIcon } from "..";
import { ShootingStarsAndStarsBackgroundDemo } from "../components/home/Stars";
import { handleSignupForm, signupWithGoogle } from "../firebase";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignUp = () => {
    const ref = useRef(null);
    const ref2 = useRef(null);

    const { setFooter, setLogsStyle, setNotInAuth } =
        useContext(LuzContext);

    useEffect(() => {
        setLogsStyle(false);
        setNotInAuth(true);
        setFooter(false);
        setInterval(() => {
            if (ref.current) {
                ref.current.classList.add("translate-x-[-100%]");
            }
            if (ref2.current) {
                ref2.current.classList.add("translate-x-[100%]");
            }
        }, 100);
    }, []);

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignupForm(e, email, password);
        console.log(name, lastName, email, password, confirmPassword);
    };

    const handleGooogle = async () => {
        await signupWithGoogle();
    }

    const [showPass, setShowPass] = useState(true);

    const [showPass2, setShowPass2] = useState(true);

    return (
        <div className="lg:grid lg:grid-cols-2 w-full sm:h-[92.15vh] font-poppins">
            <div
                ref={ref2}
                className="hidden lg:block h-full justify-center items-center transition duration-1000"
            >
                <ShootingStarsAndStarsBackgroundDemo />

                <div className="relative w-full h-full flex flex-col items-center justify-center gap-5">
                    <h1 className="text-[30px] text-white text-center">
                        WELCOME
                    </h1>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex sm:flex-col sm:items-center gap-5 sm:gap-10"
                    >
                        <div className="flex w-full sm:gap-10">
                            <input
                                type="text"
                                placeholder="First Name"
                                onChange={(e) => setName(e.target.value)}
                                className="w-[50%] p-2 placeholder:text-[13px] text-white placeholder-white placeholder:font-semibold outline-0 bg-transparent border-[#755e5e71] border-b-2"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-[50%] p-2 placeholder:text-[13px] text-white placeholder-white placeholder:font-semibold outline-0 bg-transparent border-[#755e5e71] border-b-2"
                            />
                        </div>
                        <div className="flex w-full sm:gap-10">
                            <input
                                type="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-[50%] p-2 placeholder:text-[13px] text-white placeholder-white placeholder:font-semibold outline-0 bg-transparent border-[#755e5e71] border-b-2"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                onChange={(e) => setNumber(e.target.value)}
                                className="w-[50%] p-2 placeholder:text-[13px] text-white placeholder-white placeholder:font-semibold outline-0 bg-transparent border-[#755e5e71] border-b-2"
                            />
                        </div>
                        <div className="flex w-full sm:gap-10">
                            <div className="flex relative w-full">
                                <input
                                    type={showPass ? "password" : "text"}
                                    placeholder="Password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="w-full p-2 placeholder:text-[13px] text-white placeholder-white placeholder:font-semibold outline-0 bg-transparent border-[#755e5e71] border-b-2"
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
                            <div className="flex relative w-full">
                                <input
                                    type={showPass2 ? "password" : "text"}
                                    placeholder="Confirm Password"
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    className="w-full p-2 placeholder:text-[13px] text-white placeholder-white placeholder:font-semibold outline-0 bg-transparent border-[#755e5e71] border-b-2"
                                />
                                {showPass2 ? (
                                    <FaRegEye
                                        onClick={() => setShowPass2(!showPass2)}
                                        className="text-white absolute right-0 top-[35%]"
                                    />
                                ) : (
                                    <FaRegEyeSlash
                                        onClick={() => setShowPass2(!showPass2)}
                                        className="text-white absolute right-0 top-[35%]"
                                    />
                                )}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-white font-semibold text-black py-2 sm:mt-3 w-[60%] rounded-md text-[13px]"
                        >
                            Create Account
                        </button>
                    </form>

                    <p className="text-white font-thin text-[14px]">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-blue-600 font-semibold underline"
                        >
                            Login
                        </Link>
                    </p>
                    <div onClick={handleGooogle} className="flex cursor-pointer items-center gap-2 py-2 px-4 bg-white rounded-md border-[#8080805c] border">
                        <img src={googleIcon} alt="" className="h-[20px]" />
                        <p className="text-[13px] font-semibold">
                            Sign up with Google
                        </p>
                    </div>
                </div>
            </div>
            <div
                ref={ref}
                className="hidden lg:block bg-signupBg bg-cover bg-center bg-no-repeat transition duration-1000"
            ></div>
            <div className="h-full flex lg:hidden justify-center items-center sm:bg-signupBg sm:bg-cover sm:bg-center sm:bg-no-repeat">
                <ShootingStarsAndStarsBackgroundDemo className="sm:hidden absolute" />
                <div className="glassLog relative w-full px-[10%] py-6 sm:py-3 h-full sm:h-[550px] sm:w-[75%] sm:p-10 flex flex-col justify-center gap-5">
                    <h1 className="text-[30px] text-white text-center">
                        WELCOME
                    </h1>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col items-center gap-5"
                    >
                        <div className="flex w-full gap-5 flex-col sm:grid sm:grid-cols-2 sm:gap-10">
                            <input
                                type="text"
                                placeholder="First Name"
                                onChange={(e) => setName(e.target.value)}
                                className="p-2 placeholder:text-[13px] text-white placeholder-white placeholder:font-semibold outline-0 bg-transparent border-[#755e5e71] border-b-2"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                onChange={(e) => setName(e.target.value)}
                                className="p-2 placeholder:text-[13px] text-white placeholder-white placeholder:font-semibold outline-0 bg-transparent border-[#755e5e71] border-b-2"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-2 placeholder:text-[13px] text-white placeholder-white placeholder:font-semibold outline-0 bg-transparent border-[#755e5e71] border-b-2"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                onChange={(e) => setNumber(e.target.value)}
                                className="p-2 placeholder:text-[13px] text-white placeholder-white placeholder:font-semibold outline-0 bg-transparent border-[#755e5e71] border-b-2"
                            />
                            <div className="flex relative w-full">
                                <input
                                    type={showPass ? "password" : "text"}
                                    placeholder="Password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="w-full p-2 placeholder:text-[13px] text-white placeholder-white placeholder:font-semibold outline-0 bg-transparent border-[#755e5e71] border-b-2"
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

                            <div className="flex relative w-full">
                                <input
                                    type={showPass2 ? "password" : "text"}
                                    placeholder="Confirm Password"
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    className="w-full p-2 placeholder:text-[13px] text-white placeholder-white placeholder:font-semibold outline-0 bg-transparent border-[#755e5e71] border-b-2"
                                />
                                {showPass2 ? (
                                    <FaRegEye
                                        onClick={() => setShowPass2(!showPass2)}
                                        className="text-white absolute right-0 top-[35%]"
                                    />
                                ) : (
                                    <FaRegEyeSlash
                                        onClick={() => setShowPass2(!showPass2)}
                                        className="text-white absolute right-0 top-[35%]"
                                    />
                                )}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-white font-semibold text-black py-2 sm:mt-3 w-[65%] rounded-md text-[13px]"
                        >
                            Create Account
                        </button>
                    </form>

                    <p className="text-center text-white font-thin text-[14px]">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-blue-600 font-semibold underline"
                        >
                            Login
                        </Link>
                    </p>
                    <div className="w-full flex justify-center">
                        <div className="w-fit flex cursor-pointer items-center gap-2 py-2 px-4 bg-white rounded-md border-[#8080805c] border">
                            <img src={googleIcon} alt="" className="h-[20px]" />
                            <p className="text-[13px] font-semibold">
                                Sign up with Google
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
