import { createTheme, createText } from '@shopify/restyle'

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3',
  textPrimaryColor: '#0c0d34',
  textSecondaryColor: 'rgba(12, 13, 52, 0.7)',
}

const theme = createTheme({
  colors: {
    primary: '#2cb9b0',
    title: '#0c0d34',
    text: 'rgba(12, 13, 52, 0.7)',
    grey: 'rgba(12, 13, 52, 0.05)',
    white: 'white',
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
      color: 'title',
    },
    title2: {
      fontSize: 24,
      fontFamily: 'SFProDisplay-Medium',
      color: 'title',
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

export default theme
