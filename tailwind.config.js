/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                phoneBg: "url('./src/assets/Homepage/Arrivals/img6.png')",
                signupBg: "url('./src/assets/Signup/testing1.jpg')",
                loginBg: "url('./src/assets/Signup/testing3.jpg')",
            },
            fontFamily: {
                poppins: "Poppins",
                jalla: "Fjalla One",
            },
        },
    },
    plugins: [],
};
