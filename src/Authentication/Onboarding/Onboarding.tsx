import React, { useRef } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { useValue, onScrollEvent, interpolateColor } from 'react-native-redash'
import Slide, { SLIDER_HEIGHT } from './Slide'
import Animated, { multiply } from 'react-native-reanimated'
import SubSlide from './SubSlide'

const { width } = Dimensions.get('window')
const BORDER_RADIUS = 75
const slides = [
  {
    title: 'Relaxed',
    color: '#bfeaf5',
    subTitle: 'Lorem ipsum, dolor sit',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat facilis ',
  },
  {
    title: 'Playfull',
    color: '#beecc4',
    subTitle: 'Lorem ipsum, dolor sit',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat facilis ',
  },
  {
    title: 'Excentric',
    color: '#ffe4d9',
    subTitle: 'Lorem ipsum, dolor sit',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat facilis ',
  },
  {
    title: 'Funky',
    color: '#ffdddd',
    subTitle: 'Lorem ipsum, dolor sit',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat facilis ',
  },
]

const Onboarding: React.FC = () => {
  const scrl = useRef<Animated.ScrollView>(null)
  const x = useValue(0)
  const onScroll = onScrollEvent({ x })
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(({ color }) => color),
  })

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scrl}
          horizontal
          snapToInterval={width}
          decelerationRate='fast'
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}
          bounces={false}
          {...{ onScroll }}>
          {slides.map((s, i) => (
            <Slide key={i} label={s.title} right={i % 2 !== 0} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: backgroundColor,
          }}>
          <Animated.View
            style={[
              styles.footerContent,
              {
                width: width * slides.length,
                transform: [
                  {
                    translateX: multiply(x, -1),
                  },
                ],
              },
            ]}>
            {slides.map(({ subTitle, description }, i) => (
              <SubSlide
                key={i}
                {...{ subTitle, description }}
                last={slides.length - 1 === i}
                onPress={() => {
                  if (scrl.current) {
                    scrl.current
                      .getNode()
                      .scrollTo({ x: width * (i + 1), animated: true })
                  }
                }}
              />
            ))}
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDER_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
})

export default Onboarding
