import { useTheme } from '@shopify/restyle'
import React, { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Theme, Text } from '../../components/theme'

interface ButtonProps {
  variant: 'default' | 'primary' | 'transparent'
  label?: String
  onPress: () => void
  children?: ReactNode
}

const Button: React.FC<ButtonProps> = ({
  variant,
  label,
  onPress,
  children,
}: ButtonProps) => {
  const theme = useTheme<Theme>()
  const backgroundColor =
    variant === 'primary'
      ? theme.colors.primary
      : variant === 'transparent'
      ? 'transparent'
      : theme.colors.grey

  const color =
    variant === 'primary' ? theme.colors.white : theme.colors.secondary

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}>
      {children ? (
        children
      ) : (
        <Text variant='button' style={{ color }}>
          {label}
        </Text>
      )}
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
    flexDirection: 'row',
  },
})

export default Button
