import { useTheme } from '@shopify/restyle'
import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Theme } from '../../components/theme'

interface ButtonProps {
  variant: 'default' | 'primary'
  label: String
  onPress: () => void
}

const Button: React.FC<ButtonProps> = ({
  variant,
  label,
  onPress,
}: ButtonProps) => {
  const theme = useTheme<Theme>()
  const backgroundColor =
    variant === 'primary' ? theme.colors.primary : theme.colors.body

  const color = variant === 'primary' ? theme.colors.white : theme.colors.title

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}>
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  )
}

Button.defaultProps = {
  variant: 'default',
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 100 / 2,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
  },
})

export default Button
