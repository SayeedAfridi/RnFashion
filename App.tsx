import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import RNBootSplash from 'react-native-bootsplash'
import { AuthenticationNavigator } from './src/Authentication'
import { ThemeProvider } from '@shopify/restyle'
import { theme } from './src/components'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeNavigator } from './src/Home'
import { AppRoutes } from './src/components/Navigation'

const AppStack = createStackNavigator<AppRoutes>()

const App: React.FC = () => {
  useEffect(() => {
    RNBootSplash.hide()
  }, [])

  return (
    <ThemeProvider {...{ theme }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppStack.Navigator initialRouteName='Home' headerMode='none'>
            <AppStack.Screen
              name='Authentication'
              component={AuthenticationNavigator}
            />
            <AppStack.Screen name='Home' component={HomeNavigator} />
          </AppStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App
