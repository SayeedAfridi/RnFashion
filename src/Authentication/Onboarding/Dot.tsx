import React from 'react'
import { StyleSheet } from 'react-native'
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated'

interface DotProps {
  index: number
  currentIndex: Animated.Node<number>
}

const Dot: React.FC<DotProps> = ({ index, currentIndex }: DotProps) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.4],
    extrapolate: Extrapolate.CLAMP,
  })
  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  })
  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor: '#2cb9b0', opacity, transform: [{ scale }] }, //transform: [scale] },
      ]}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    height: 8,
    width: 8,
    borderRadius: 100 / 2,
    margin: 4,
  },
})

export default Dot
