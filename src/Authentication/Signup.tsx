import React, { useRef } from 'react'
import { Button, Container, Text, Box, TextInput } from '../components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Footer from './components/Footer'
import { TextInputRef } from '../components/Form/TextInput'
import { Routes, StackNavigationProps } from '../components/Navigation'

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be 6 character!')
    .required('Required'),
  passwordConfirm: Yup.string()
    .equals([Yup.ref('password')], "Password doesn't match")
    .required('Required'),
})

const Signup = ({ navigation }: StackNavigationProps<Routes, 'Signup'>) => {
  const password = useRef<TextInputRef>(null)
  const passwordConfirm = useRef<TextInputRef>(null)
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      initialValues: { email: '', password: '', passwordConfirm: '' },
      validationSchema: SignupSchema,
      onSubmit: (val) => console.log(val),
    },
  )
  const footer = (
    <Footer
      title='Already have an account?'
      action='Login here.'
      onPress={() => navigation.navigate('Login')}
    />
  )
  return (
    <Container footer={footer}>
      <Box padding='xl' paddingBottom='s'>
        <Text variant='title1' textAlign='center'>
          Create your account
        </Text>
        <Text variant='body' textAlign='center'>
          Let us know your email and password.
        </Text>
      </Box>
      <Box alignItems='center' justifyContent='center' padding='m'>
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
          returnKeyType='next'
          returnKeyLabel='Next'
          onSubmitEditing={() => password.current?.focus()}
        />
        <TextInput
          ref={password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          secureTextEntry={true}
          icon='lock'
          placeholder='Enter your Password'
          error={errors.password}
          touched={touched.password}
          autoCapitalize='none'
          returnKeyType='next'
          returnKeyLabel='Next'
          onSubmitEditing={() => passwordConfirm.current?.focus()}
        />
        <TextInput
          ref={passwordConfirm}
          onChangeText={handleChange('passwordConfirm')}
          onBlur={handleBlur('passwordConfirm')}
          secureTextEntry={true}
          icon='lock'
          placeholder='Confirm your Password'
          error={errors.passwordConfirm}
          touched={touched.passwordConfirm}
          autoCapitalize='none'
          returnKeyType='go'
          returnKeyLabel='go'
          onSubmitEditing={() => handleSubmit()}
        />
        <Box height={5} />
        <Button
          onPress={handleSubmit}
          variant='primary'
          label='Create your account'
        />
      </Box>
    </Container>
  )
}

export default Signup
