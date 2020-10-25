import React from 'react'
import {
  Button,
  Container,
  Text,
  Box,
  TextInput,
  Checkbox,
} from '../../components'
import SocialLogin from '../components/SocialLogin'
import { Formik } from 'formik'
import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be 6 character!')
    .required('Required'),
})

const Login = () => {
  const footer = (
    <Box justifyContent='center' alignItems='center' marginBottom='s'>
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
      <Box padding='xl' paddingBottom='s'>
        <Text variant='title1' textAlign='center'>
          Welcome Back!
        </Text>
        <Text variant='body' textAlign='center'>
          Use your credentials below and login to your account.
        </Text>
      </Box>

      <Formik
        initialValues={{ email: '', password: '', remember: false }}
        validationSchema={LoginSchema}
        onSubmit={(values) => console.log(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          touched,
          values,
          setFieldValue,
        }) => (
          <Box alignItems='center' justifyContent='center' padding='m'>
            <TextInput
              onChangeText={handleChange('email')}
              icon='mail'
              onBlur={handleBlur('email')}
              placeholder='Enter your Email'
              error={errors.email}
              touched={touched.email}
            />
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              secureTextEntry={true}
              icon='lock'
              placeholder='Enter your Password'
              error={errors.password}
              touched={touched.password}
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
              <Text color='primary' variant='button'>
                Forgot Password
              </Text>
            </Box>
            <Button
              onPress={handleSubmit}
              variant='primary'
              label='Log into your account'
            />
          </Box>
        )}
      </Formik>
    </Container>
  )
}

export default Login
