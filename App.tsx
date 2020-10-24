import React, { useEffect } from 'react'
import { StyleSheet, View, Text, StatusBar } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'

export interface Props {
  isLoaded: boolean
}

const App: React.FC<Props> = ({ isLoaded = true }) => {
  useEffect(() => {
    RNBootSplash.hide()
  }, [])

  if (!isLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <Text>Start editing App.js</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App
