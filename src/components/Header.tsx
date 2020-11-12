import React from 'react'
import { Text, Box } from './theme'
import RoundedIconButton from './Button/RoundedIconButton'

export interface HeaderProps {
  left: {
    icon: string
    onPress: () => void
  }
  title: string
  right: {
    icon: string
    onPress: () => void
  }
  dark?: boolean
}

const Header: React.FC<HeaderProps> = ({
  left,
  right,
  title,
  dark = false,
}: HeaderProps) => {
  const color = dark ? 'white' : 'secondary'
  const backgroundColor = dark ? 'secondary' : 'lightGrey'
  return (
    <Box
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      paddingVertical='m'
      paddingHorizontal='s'>
      <RoundedIconButton
        onPress={left.onPress}
        name={left.icon}
        size={32}
        color={color}
        backgroundColor={backgroundColor}
        iconRatio={0.5}
      />
      <Text variant='header' color={color}>
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        onPress={right.onPress}
        name='shopping-bag'
        size={32}
        color={color}
        iconRatio={0.5}
        backgroundColor={backgroundColor}
      />
    </Box>
  )
}

export default Header
