import React from 'react'
import {
  Container,
  Text,
  Box,
  RoundedIcon,
  RoundedIconButton,
} from '../components'
import { AuthNavigationProps } from '../components/Navigation'

const PasswordChanged = ({ navigation }: AuthNavigationProps<'Login'>) => {
  return (
    <Container
      footer={
        <Box justifyContent='center' alignItems='center' marginVertical='s'>
          <RoundedIconButton
            backgroundColor='white'
            color='secondary'
            size={64}
            name='x'
            onPress={() => navigation.pop()}
          />
        </Box>
      }>
      <Box flex={1} padding='l' justifyContent='center' alignItems='center'>
        <RoundedIcon
          backgroundColor='primaryLight'
          color='primary'
          size={80}
          name='check'
        />
        <Text variant='title1' textAlign='center' marginVertical='l'>
          Your password was successfully changed!
        </Text>
        <Text variant='body' textAlign='center'>
          Close the window and login again.
        </Text>
      </Box>
    </Container>
  )
}

export default PasswordChanged
