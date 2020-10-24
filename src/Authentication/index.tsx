import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Onboarding from './Onboarding'
import Welcome from './Welcome'
import Login from './Login'
import { Routes } from '../components/Navigation'

const AuthenticationStack = createStackNavigator<Routes>()

export const AuthenticationNavigator: React.FC = () => (
  <AuthenticationStack.Navigator headerMode='none'>
    <AuthenticationStack.Screen name='Onboarding' component={Onboarding} />
    <AuthenticationStack.Screen name='Welcome' component={Welcome} />
    <AuthenticationStack.Screen name='Login' component={Login} />
  </AuthenticationStack.Navigator>
)
