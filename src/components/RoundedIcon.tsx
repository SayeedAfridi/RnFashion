import React from 'react'
import { Theme, Box, Text } from './theme'
import Icon from 'react-native-vector-icons/Feather'

export interface RoundedIconProps {
  name: string
  color: keyof Theme['colors']
  backgroundColor: keyof Theme['colors']
  size: number
  iconRatio?: number
}

const RoundedIcon: React.FC<RoundedIconProps> = ({
  iconRatio = 0.6,
  ...props
}: RoundedIconProps) => {
  const iconSize = props.size * iconRatio
  return (
    <Box
      backgroundColor={props.backgroundColor}
      justifyContent='center'
      alignItems='center'
      height={props.size}
      width={props.size}
      borderRadius='round'>
      <Text color={props.color} style={{ height: iconSize, width: iconSize }}>
        <Icon name={props.name} size={iconSize} />
      </Text>
    </Box>
  )
}

export default RoundedIcon
