import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Box, useTheme } from '../../components'

const Background = () => {
  const theme = useTheme()
  return (
    <Box style={StyleSheet.absoluteFill}>
      <Box flex={1 / 3} backgroundColor='lightBlue'>
        <Box flex={1} backgroundColor='white' borderBottomRightRadius='xl' />
      </Box>
      <Box flex={1 / 3}>
        <Box flex={1} backgroundColor='white' />
        <Box flex={1} backgroundColor='secondary' />
        <Image
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            borderTopLeftRadius: theme.borderRadii.xl,
            borderBottomRightRadius: theme.borderRadii.xl,
          }}
          source={require('../../assets/paterns/1.png')}
        />
      </Box>
      <Box backgroundColor='lightBlue' flex={1 / 3}>
        <Box flex={1} backgroundColor='secondary' borderTopLeftRadius='xl' />
      </Box>
    </Box>
  )
}

export default Background
