import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import RNBootSplash from 'react-native-bootsplash'
import Onboarding from './src/Authentication/Onboarding'

const AuthenticationStack = createStackNavigator()

const AuthenticationNavigator: React.FC = () => (
  <AuthenticationStack.Navigator headerMode='nones'>
    <AuthenticationStack.Screen name='Onboarding' component={Onboarding} />
  </AuthenticationStack.Navigator>
)

const App: React.FC = () => {
  useEffect(() => {
    RNBootSplash.hide()
  }, [])

  return (
    <NavigationContainer>
      <AuthenticationNavigator />
    </NavigationContainer>
  )
}

export default App
