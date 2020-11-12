import React, { useRef } from 'react'
import {
  Button,
  Container,
  Text,
  Box,
  TextInput,
  Checkbox,
  LinkButton,
} from '../components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Footer from './components/Footer'
import { TextInputRef } from '../components/Form/TextInput'
import { AuthNavigationProps } from '../components/Navigation'
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be 6 character!')
    .required('Required'),
})

const Login = ({ navigation }: AuthNavigationProps<'Login'>) => {
  const password = useRef<TextInputRef>(null)
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: { email: '', password: '', remember: false },
    validationSchema: LoginSchema,
    onSubmit: () => navigation.navigate('Home'),
  })
  const footer = (
    <Footer
      title="Don't have account?"
      action='Sign up here.'
      onPress={() => navigation.navigate('Signup')}
    />
  )
  return (
    <Container footer={footer}>
      <Text variant='title1' textAlign='center'>
        Welcome Back!
      </Text>
      <Text variant='body' textAlign='center'>
        Use your credentials below and login to your account.
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
        returnKeyType='go'
        returnKeyLabel='go'
        onSubmitEditing={() => handleSubmit()}
      />
      <Box
        flexDirection='row'
        justifyContent='space-between'
        paddingVertical='m'
        width={'100%'}
        alignItems='center'>
        <Checkbox
          checked={values.remember}
          onChange={(v) => setFieldValue('remember', v)}
          label='Remember me'
        />
        <LinkButton
          onPress={() => navigation.navigate('ForgotPassword')}
          label='Forgot Password?'
          color='primary'
        />
      </Box>
      <Button
        onPress={handleSubmit}
        variant='primary'
        label='Log into your account'
      />
    </Container>
  )
}

export default Login
