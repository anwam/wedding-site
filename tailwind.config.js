/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#d4a373',
                secondary: '#e5989b'
            },
            backgroundColor: {
                base: '#faedcd'
            }
        },
    },
    plugins: [],
}

