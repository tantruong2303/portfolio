const colors = require('tailwindcss/colors');
const theme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: {
        content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        spacing: { ...theme.spacing, 112.5: '28.125rem' },
        extend: {},
        colors: {
            ...colors,
            shark: {
                DEFAULT: '#191A1D',
                50: '#858A96',
                100: '#787C8A',
                200: '#60646F',
                300: '#484B54',
                400: '#313338',
                500: '#191A1D',
                600: '#010102',
                700: '#000000',
                800: '#000000',
                900: '#000000',
            },
            sandal: {
                DEFAULT: '#AB876E',
                50: '#FFFFFF',
                100: '#F6F2EF',
                200: '#E3D7CF',
                300: '#D0BCAF',
                400: '#BEA28E',
                500: '#AB876E',
                600: '#926D54',
                700: '#715542',
                800: '#513D2F',
                900: '#31251C',
            },
            bombay: {
                DEFAULT: '#A9A9AA',
                50: '#FFFFFF',
                100: '#FFFFFF',
                200: '#F6F6F6',
                300: '#DCDCDD',
                400: '#C3C3C3',
                500: '#A9A9AA',
                600: '#8F8F91',
                700: '#767677',
                800: '#5C5C5E',
                900: '#434344',
            },
        },
        backgroundImage: {
            ...theme.backgroundImage,
        },
        gridTemplateColumns: {
            ...theme.gridTemplateColumns,
        },
        boxShadow: {
            ...theme.boxShadow,
        },
    },
    variants: {
        extend: {},
    },
    corePlugins: {
        float: false,
    },
    plugins: [],
};
