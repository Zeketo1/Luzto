/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                phoneBg: "url('./src/assets/Homepage/Arrivals/img6.png')",
                signupBg: "url('./src/assets/Signup/testing1.jpg')",
                loginBg: "url('./src/assets/Signup/testing3.jpg')",
                cartBg: "url('./src/assets/Cart/cartBg.jpg')",
            },
            fontFamily: {
                poppins: "Poppins",
                jalla: "Fjalla One",
            },
            animation: {
                "meteor-effect": "meteor 5s linear infinite",
            },
            keyframes: {
                meteor: {
                    "0%": {
                        transform: "rotate(215deg) translateX(0)",
                        opacity: "1",
                    },
                    "70%": { opacity: "1" },
                    "100%": {
                        transform: "rotate(215deg) translateX(-500px)",
                        opacity: "0",
                    },
                },
            },
        },
    },
    plugins: [],
};
