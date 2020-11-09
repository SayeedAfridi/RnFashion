import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from '../index'
import { Theme } from '../theme'

interface LinkButtonProps {
  label: string
  onPress: () => void
  color?: keyof Theme['colors']
}

const LinkButton = ({ label, onPress, color }: LinkButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Text variant='button' color={color}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default LinkButton
