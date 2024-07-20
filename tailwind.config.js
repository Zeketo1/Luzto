/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "phoneBg": "url('./src/assets/Homepage/Arrivals/img6.png')",
            },
        },
    },
    plugins: [],
};