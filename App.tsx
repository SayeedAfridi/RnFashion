import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import RNBootSplash from 'react-native-bootsplash'
import { AuthenticationNavigator } from './src/Authentication'
import { ThemeProvider } from '@shopify/restyle'
import { theme } from './src/components'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App: React.FC = () => {
  useEffect(() => {
    RNBootSplash.hide()
  }, [])

  return (
    <ThemeProvider {...{ theme }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AuthenticationNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App
