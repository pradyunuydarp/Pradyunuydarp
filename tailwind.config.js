/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                generalsans: ['General Sans', 'sans-serif'],
            },
            colors: {
                black: {
                    DEFAULT: '#000',
                    100: '#010103',
                    200: '#0E0E10',
                    300: '#1C1C21',
                    500: '#3A3A49',
                    600: '#1A1A1A',
                },
                white: {
                    DEFAULT: '#FFFFFF',
                    800: '#E4E4E6',
                    700: '#D6D9E9',
                    600: '#AFB0B6',
                    500: '#62646C',
                },
            },
            backgroundImage: {
                terminal: "url('/assets/terminal.png')",
            },

            // 🔽 Add this block
            keyframes: {
                glide: {
                    '0%': { transform: 'translateX(-100%)', opacity: '0' },
                    '50%': { opacity: '1' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
            },
            animation: {
                glide: 'glide 1.5s ease-out forwards',
            },
        },
    },
    plugins: [],
};
