/** @type {import('tailwindcss').Config} */

const colors = {
    brand: 'hsla(132, 98%, 52%, 1)',
    light: 'hsla(0, 0%, 100%, 1)',
    dark: 'hsla(0, 0%, 0%, 1)',
    dim: 'hsla(0, 0%, 9%, 1)',

}

module.exports = {
    content: [
        './public/**/*.html',
        './public/*.html',
    ],
    theme: {
        extend: {
            colors: {
                brand: colors.brand,
                light: colors.light,
                dark: colors.dark,
                dim: colors.dim,
            },
            backgroundImage: {
                body: `linear-gradient(to bottom right,
                  ${colors.brand},
                  ${colors.light},
                  ${colors.dark},
                  ${colors.dim})`,
            },

            fontFamily: {
                sans: ['Open Sans', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

