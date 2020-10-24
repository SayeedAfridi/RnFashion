import React from 'react'
import { View } from 'react-native'
import { Button, Container, Text, Box } from '../../components'
import SocialLogin from '../components/SocialLogin'

const Login = () => {
  const footer = (
    <Box justifyContent='center' alignItems='center' marginBottom='m'>
      <SocialLogin />
      <Button onPress={() => {}} variant='transparent'>
        <Text variant='button' color='white'>
          Don't have account?{' '}
        </Text>
        <Text variant='button' color='primary'>
          Sign up here.
        </Text>
      </Button>
    </Box>
  )
  return (
    <Container footer={footer}>
      <View />
    </Container>
  )
}

export default Login
