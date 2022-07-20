module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            animation: {
                init: 'init 3s forwards',
            },
            keyframes: {
                init: {
                    '0%': {
                        transform: 'scaleX(0) translateY(-50%)',
                        opacity: 1,
                    },
                    '50%': {
                        transform: 'scaleX(1) translateY(-50%)',
                        opacity: 1,
                    },
                    '100%': {
                        transform: 'scaleX(1) translateY(-50%)',
                        opacity: 0,
                    },
                },
            },
        },
    },
    plugins: [],
}
