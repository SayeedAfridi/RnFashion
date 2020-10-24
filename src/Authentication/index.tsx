import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Onboarding from './Onboarding'
import Welcome from './Welcome'
import { Routes } from '../components/Navigation'

const AuthenticationStack = createStackNavigator<Routes>()

export const AuthenticationNavigator: React.FC = () => (
  <AuthenticationStack.Navigator headerMode='none'>
    <AuthenticationStack.Screen name='Onboarding' component={Onboarding} />
    <AuthenticationStack.Screen name='Welcome' component={Welcome} />
  </AuthenticationStack.Navigator>
)
