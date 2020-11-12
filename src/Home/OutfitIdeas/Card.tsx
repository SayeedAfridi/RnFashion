import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { add } from 'react-native-reanimated'
import {
  mixColor,
  mix,
  usePanGestureHandler,
  withSpring,
} from 'react-native-redash'
import { Box } from '../../components'

const { width: wWidth } = Dimensions.get('window')

const width = wWidth * 0.8
const height = width * (425 / 295)
const borderRadius = 24

export interface CardProps {
  position: Animated.Adaptable<number>
}

const Card: React.FC<CardProps> = ({ position }: CardProps) => {
  const backgroundColor = mixColor(position, '#c9e9e7', '#74bcb8')
  const translateYOffset = mix(position, 0, -50)
  const scale = mix(position, 1, 0.9)
  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler()

  const translateX = withSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-width, 0, width],
  })

  const translateY = add(
    translateYOffset,
    withSpring({
      value: translation.y,
      velocity: velocity.y,
      state,
      snapPoints: [0],
    }),
  )

  return (
    <Box
      justifyContent='center'
      alignItems='center'
      style={StyleSheet.absoluteFill}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            backgroundColor,
            width,
            height,
            borderRadius,
            transform: [{ translateY }, { translateX }, { scale }],
          }}
        />
      </PanGestureHandler>
    </Box>
  )
}

export default Card
