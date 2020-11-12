import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { RoundedIcon, Box, Text } from '../../components'
import { Theme } from '../../components/theme'

export interface DrawerItemProps {
  icon: string
  color: keyof Theme['colors']
  label: string
  screen: string
}

const DrawerItem = (props: DrawerItemProps) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(props.screen)}>
      <Box flexDirection='row' alignItems='center' padding='s'>
        <RoundedIcon
          size={32}
          name={props.icon}
          backgroundColor={props.color}
          color='white'
          iconRatio={0.5}
        />
        <Text variant='button' color='secondary' marginLeft='m'>
          {props.label}
        </Text>
      </Box>
    </TouchableOpacity>
  )
}

export default DrawerItem
