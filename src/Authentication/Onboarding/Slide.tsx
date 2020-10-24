import React from 'react'
import { View, Dimensions, StyleSheet, Image } from 'react-native'
import { Text } from '../../components'

const { width, height } = Dimensions.get('window')
export const SLIDER_HEIGHT = 0.61 * height
export const BORDER_RADIUS = 75

interface SliderProps {
  label: String
  right?: boolean
  image: number
}

const Slide: React.FC<SliderProps> = ({ label, right, image }: SliderProps) => {
  const transform = [
    { translateY: (SLIDER_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? '-90deg' : '90deg' },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.underlay}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={[styles.titleContainer, { transform }]}>
        <Text variant='hero'>{label}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderBottomRightRadius: BORDER_RADIUS,
  },
})

export default Slide
