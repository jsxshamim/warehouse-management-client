/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        container: {
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "8rem",
            },
        },
        extend: {
            colors: {
                primary: "#F68629",
                secondary: "#7258db",
                paragraph: "#334155",
                title: "#212529",
            },
        },
    },
    plugins: [],
};
