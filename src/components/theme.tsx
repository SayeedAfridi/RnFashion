import {
  createTheme,
  createText,
  createBox,
  useTheme as useReTheme,
} from '@shopify/restyle'
import { ViewStyle, TextStyle, ImageStyle } from 'react-native'

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
    primaryLight: '#e7f9f7',
    orange: 'orange',
    yellow: '#f3c92e',
    pink: 'pink',
    violet: 'violet',
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

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle }
export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T,
) => () => {
  const currentTheme = useTheme()
  return styles(currentTheme)
}

export const Text = createText<Theme>()
export const Box = createBox<Theme>()
export const useTheme = () => useReTheme<Theme>()

export default theme
