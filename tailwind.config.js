/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "rgb(var(--background) / <alpha-value>)",
                foreground: "rgb(var(--foreground) / <alpha-value>)",
                primary: "rgb(var(--primary) / <alpha-value>)",
                "primary-light": "rgb(var(--primary-light) / <alpha-value>)",
                "primary-dark": "rgb(var(--primary-dark) / <alpha-value>)",
                secondary: "rgb(var(--secondary) / <alpha-value>)",
                "secondary-light":
                    "rgb(var(--secondary-light) / <alpha-value>)",
                "secondary-dark": "rgb(var(--secondary-dark) / <alpha-value>)",
            },
        },
    },
    plugins: [],
};
