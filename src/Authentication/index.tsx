import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'
import Onboarding from './Onboarding'
import Welcome from './Welcome'
import Login from './Login'
import Signup from './Signup'
import ForgotPassword from './ForgotPassword'
import PasswordChanged from './PasswordChanged'
import { Routes } from '../components/Navigation'

const AuthenticationStack = createStackNavigator<Routes>()

export const AuthenticationNavigator: React.FC = () => (
  <AuthenticationStack.Navigator
    screenOptions={{
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
    headerMode='none'>
    <AuthenticationStack.Screen name='Onboarding' component={Onboarding} />
    <AuthenticationStack.Screen name='Welcome' component={Welcome} />
    <AuthenticationStack.Screen name='Login' component={Login} />
    <AuthenticationStack.Screen name='Signup' component={Signup} />
    <AuthenticationStack.Screen
      name='ForgotPassword'
      component={ForgotPassword}
    />
    <AuthenticationStack.Screen
      name='PasswordChanged'
      component={PasswordChanged}
    />
  </AuthenticationStack.Navigator>
)
