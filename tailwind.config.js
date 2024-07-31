/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "phoneBg": "url('./src/assets/Homepage/Arrivals/img6.png')",
                "signupBg": "url('./src/assets/Signup/testing1.jpg')",
                "loginBg": "url('./src/assets/Signup/testing3.jpg')",
            },
            fontFamily: {
                "poppins": "Poppins",
                "jalla": "Fjalla One",
            },
        },
        screens: {
            "sm": "640px",
            "md": "768px",
            "lg": "1024px",
            "xl": "1280px",
            "2xl": "1536px",
        },
    },
    plugins: [],
};
