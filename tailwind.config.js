/** @type {import('tailwindcss').Config} */
/* eslint-disable global-require */
// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    // TODO: Uncomment this part of the code and the import of "defaultTheme" above, and complete TODOs
    fontFamily: {
      //   // TODO: Add font families
      //   //       Delete "mono" if it isn't needed
      sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      mono: ['Poppins', ...defaultTheme.fontFamily.mono],
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      // TODO: Add colors
      // Make sure that they are prepared in the Figma and follow the naming primary/secondary/gray-${number}
      // Example of correctly prepared colors in Figma — https://user-images.githubusercontent.com/20713191/143586876-5e834233-9639-4166-9811-b00e63820d98.png
      // Example of incorrectly prepared colors in Figma — https://user-images.githubusercontent.com/20713191/143586974-6986149f-aee3-450c-a1dd-26e73e3aca02.png
      black: '#0E0A0F',
      white: '#FFF',
      primary: {
        1: '#9966FF',
        2: '#CB6AFB',
        3: '#BD9CFF',
      },
      secondary: {
        1: '#40BFAA',
        2: '#F04242',
        3: '#BB99FF',
      },
      gray: {
        98: '#FAF9FA',
        94: '#F0EEF1',
      },
    }),
    screens: {
      '2xl': { max: '1919px' },
      xl: { max: '1535px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '359px' },
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
