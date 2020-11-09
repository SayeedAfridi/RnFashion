import React from 'react'
import { Box, useTheme, Text, Button, LinkButton } from '../components'
import { Image, Dimensions } from 'react-native'
import { Routes, StackNavigationProps } from '../components/Navigation'

const { width } = Dimensions.get('window')

const image = {
  src: require('../assets/images/5.png'),
  width: 434,
  height: 575,
}

const Welcome = ({ navigation }: StackNavigationProps<Routes, 'Welcome'>) => {
  const theme = useTheme()
  const BORDER_RADIUS = theme.borderRadii.xl
  return (
    <Box flex={1} backgroundColor='white'>
      <Box
        flex={1}
        borderBottomRightRadius='xl'
        backgroundColor='grey'
        justifyContent='flex-end'
        alignItems='center'>
        <Image
          source={image.src}
          style={{
            width: width - BORDER_RADIUS,
            height: ((width - BORDER_RADIUS) * image.height) / image.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius='xl'>
        <Box
          backgroundColor='grey'
          position='absolute'
          top={0}
          left={0}
          bottom={0}
          right={0}
        />
        <Box
          backgroundColor='white'
          borderTopLeftRadius='xl'
          justifyContent='space-evenly'
          alignItems='center'
          padding='xl'
          flex={1}>
          <Text textAlign='center' variant='title2'>
            Lets's get started
          </Text>
          <Text variant='body' textAlign='center'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
            perferendis.
          </Text>
          <Button
            variant='primary'
            label='Have an account? Login'
            onPress={() => navigation.navigate('Login')}
          />
          <Button variant='default' label="Join us it's free" />
          <LinkButton
            onPress={() => navigation.navigate('ForgotPassword')}
            label='Forgot password?'
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Welcome
