import { createTheme, createText, createBox } from '@shopify/restyle';

const theme = createTheme({
  colors: {
    primary: '#40DF9F',
    primaryDark: '#286053',
    red: '#FF565E',
    redDark: '#623A42',
    white: '#FFFFFF',
    orange: '#FF8A34',
    yellow: '#FFBC25',
    yellowDark: '#625B39',
    blue: '#005DF2',
    purple: '#6952DC',
    darkGreen: '#286053',
    dark: '#1F2E35',
    light: '#96A7AF',
    black: '#000',
  },
  spacing: {
    s: 5,
    m: 10,
    l: 15,
    xl: 20,
    xxl: 30,
  },
  borderRadii: {
    none: 0,
    s: 5,
    m: 12,
    l: 25,
    xl: 35,
  },
  textVariants: {
    h1: {
      fontSize: 42,
      lineHeight: 53,
      fontFamily: 'SFProDisplay-Bold',
    },
    h2: {
      fontSize: 32,
      lineHeight: 53,
      fontFamily: 'SFProDisplay-Bold',
    },
    h3: {
      fontSize: 26,
      lineHeight: 31,
      fontFamily: 'SFProDisplay-Bold',
    },
    h4: {
      fontSize: 24,
      lineHeight: 29,
      fontFamily: 'SFProDisplay-Bold',
    },
    h5: {
      fontSize: 22,
      lineHeight: 26,
      fontFamily: 'SFProDisplay-Bold',
    },
    h6: {
      fontSize: 18,
      lineHeight: 21,
      fontFamily: 'SFProDisplay-Bold',
    },
    h7: {
      fontSize: 16,
      lineHeight: 19,
      fontFamily: 'SFProDisplay-Bold',
    },
    h8: {
      fontSize: 14,
      lineHeight: 17,
      fontFamily: 'SFProDisplay-Bold',
    },
    b1: {
      fontSize: 24,
      lineHeight: 29,
      fontFamily: 'SFProDisplay-Regular',
    },
    b2: {
      fontSize: 18,
      lineHeight: 22,
      fontFamily: 'SFProDisplay-Regular',
    },
    b3: {
      fontSize: 16,
      lineHeight: 19,
      fontFamily: 'SFProDisplay-Regular',
    },
    b4: {
      fontSize: 14,
      lineHeight: 17,
      fontFamily: 'SFProDisplay-Regular',
    },
    button: {
      fontSize: 16,
      lineHeight: 19,
      fontFamily: 'SFProDisplay-Bold',
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
