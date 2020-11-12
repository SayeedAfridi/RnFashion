import React from 'react'
import { Button, Container, Text, Box, TextInput } from '../components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Footer from './components/Footer'
import { Linking } from 'react-native'
import { AuthNavigationProps } from '../components/Navigation'

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
})

const ForgotPassword = ({ navigation }: AuthNavigationProps<'Login'>) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      initialValues: { email: '' },
      validationSchema: ForgotPasswordSchema,
      onSubmit: () => navigation.navigate('PasswordChanged'),
    },
  )
  const footer = (
    <Footer
      title="Don't work?"
      action='Try another way.'
      onPress={() => Linking.openURL('mailto: as.afridi563@gmail.com')}
    />
  )
  return (
    <Container footer={footer}>
      <Text variant='title1' textAlign='center'>
        Forgot Password?
      </Text>
      <Text variant='body' textAlign='center'>
        Enter the email address associated with your account.
      </Text>
      <TextInput
        onChangeText={handleChange('email')}
        icon='mail'
        onBlur={handleBlur('email')}
        placeholder='Enter your Email'
        error={errors.email}
        touched={touched.email}
        autoCompleteType='email'
        keyboardType='email-address'
        autoCapitalize='none'
        returnKeyType='go'
        returnKeyLabel='Go'
        onSubmitEditing={() => handleSubmit()}
      />
      <Box height={10} />
      <Button onPress={handleSubmit} variant='primary' label='Reset password' />
    </Container>
  )
}

export default ForgotPassword
