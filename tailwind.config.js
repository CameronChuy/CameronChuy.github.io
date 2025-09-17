/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './**/*.{html,js,ts,jsx,tsx}', // adjust to match your project files
        './public/**/*.html',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#D50032', // Crimson
                },
                accent: {
                    DEFAULT: '#FFC0CB', // Soft Pink
                },
                background: {
                    DEFAULT: '#2C2C2C', // Deep Charcoal
                    light: '#FFFAFA', // Snow White
                },
                muted: {
                    DEFAULT: '#4A4A4A', // Medium Gray
                },
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
                heading: ['Space Grotesk', 'ui-sans-serif', 'system-ui'],
                accent: ['Poppins', 'ui-sans-serif', 'system-ui'],
            },
            keyframes: {
                spinborder: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
            },
            animation: {
                spinborder: 'spinborder 4s linear infinite',
            },
        },
    },
    plugins: [],
}
