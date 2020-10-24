import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import RNBootSplash from 'react-native-bootsplash'
import { AuthenticationNavigator } from './src/Authentication'
import { ThemeProvider } from '@shopify/restyle'
import { theme } from './src/components'

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
