import { createTheme, createText, createBox } from '@shopify/restyle'

const theme = createTheme({
  colors: {
    primary: '#2cb9b0',
    secondary: '#0c0d34',
    text: 'rgba(12, 13, 52, 0.7)',
    darkGrey: '#8a8d90',
    grey: 'rgba(12, 13, 52, 0.05)',
    white: 'white',
    lightGrey: '#f4f0ef',
    danger: '#ff0058',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
    none: 0,
    round: 100 / 2,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: 'SFProDisplay-Bold',
      color: 'white',
    },
    title1: {
      fontSize: 28,
      fontFamily: 'SFProText-Semibold',
      color: 'secondary',
    },
    title2: {
      fontSize: 24,
      fontFamily: 'SFProDisplay-Medium',
      color: 'secondary',
      lineHeight: 30,
    },
    body: {
      fontSize: 16,
      fontFamily: 'SFProDisplay-Regular',
      color: 'text',
      lineHeight: 24,
    },
    button: {
      fontSize: 15,
      fontFamily: 'SFProDisplay-Medium',
      color: 'text',
    },
  },
})

export type Theme = typeof theme

export const Text = createText<Theme>()
export const Box = createBox<Theme>()

export default theme
