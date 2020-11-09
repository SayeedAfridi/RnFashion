import React from 'react'
import { TouchableOpacity } from 'react-native'
import RoundedIcon, { RoundedIconProps } from '../RoundedIcon'

interface RoundedIcnBtnProps extends RoundedIconProps {
  onPress: () => void
}

const RoundedIconButton: React.FC<RoundedIcnBtnProps> = ({
  onPress,
  ...props
}: RoundedIcnBtnProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <RoundedIcon {...props} />
    </TouchableOpacity>
  )
}

export default RoundedIconButton
