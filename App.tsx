import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import RNBootSplash from 'react-native-bootsplash'
import { Onboarding, Welcome } from './src/Authentication'
import { ThemeProvider } from '@shopify/restyle'
import { theme } from './src/components'

const AuthenticationStack = createStackNavigator()

const AuthenticationNavigator: React.FC = () => (
  <AuthenticationStack.Navigator headerMode='none'>
    <AuthenticationStack.Screen name='Onboarding' component={Onboarding} />
    <AuthenticationStack.Screen name='Welcome' component={Welcome} />
  </AuthenticationStack.Navigator>
)

const App: React.FC = () => {
  useEffect(() => {
    RNBootSplash.hide()
  }, [])

  return (
    <ThemeProvider {...{ theme }}>
      <NavigationContainer>
        <AuthenticationNavigator />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
