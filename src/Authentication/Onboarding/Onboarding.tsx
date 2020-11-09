import React, { useRef } from 'react'
import { View, StyleSheet, Dimensions, Image } from 'react-native'
import { useScrollHandler, interpolateColor } from 'react-native-redash'
import Slide, { SLIDER_HEIGHT } from './Slide'
import Animated, {
  divide,
  Extrapolate,
  interpolate,
  multiply,
} from 'react-native-reanimated'
import SubSlide from './SubSlide'
import Dot from './Dot'
import { AuthNavigationProps } from '../../components/Navigation'
import { Theme, useTheme, makeStyles } from '../../components/theme'

const { width } = Dimensions.get('window')

const slides = [
  {
    title: 'Relaxed',
    color: '#bfeaf5',
    subTitle: 'Lorem ipsum, dolor sit',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat facilis ',
    image: {
      src: require('../../assets/images/1.png'),
      width: 418,
      height: 597,
    },
  },
  {
    title: 'Playfull',
    color: '#beecc4',
    subTitle: 'Lorem ipsum, dolor sit',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat facilis ',
    image: {
      src: require('../../assets/images/2.png'),
      width: 408,
      height: 612,
    },
  },
  {
    title: 'Eccentric',
    color: '#ffe4d9',
    subTitle: 'Lorem ipsum, dolor sit',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat facilis ',
    image: {
      src: require('../../assets/images/3.png'),
      width: 433,
      height: 577,
    },
  },
  {
    title: 'Funky',
    color: '#ffdddd',
    subTitle: 'Lorem ipsum, dolor sit',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat facilis ',
    image: {
      src: require('../../assets/images/4.png'),
      width: 408,
      height: 612,
    },
  },
]

const Onboarding = ({ navigation }: AuthNavigationProps<'Onboarding'>) => {
  const theme = useTheme()
  const styles = useStyles()
  const scrl = useRef<Animated.ScrollView>(null)
  const { scrollHandler, x } = useScrollHandler()
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(({ color }) => color),
  })
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        {slides.map(({ image }, i) => {
          const opacity = interpolate(x, {
            inputRange: [(i - 0.5) * width, i * width, (i + 0.5) * width],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          })
          return (
            <Animated.View key={i} style={[styles.underlay, { opacity }]}>
              <Image
                source={image.src}
                style={{
                  width: width - theme.borderRadii.xl,
                  height:
                    ((width - theme.borderRadii.xl) * image.height) /
                    image.width,
                }}
              />
            </Animated.View>
          )
        })}
        <Animated.ScrollView
          ref={scrl}
          horizontal
          snapToInterval={width}
          decelerationRate='fast'
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}>
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
          <View style={styles.footerContent}>
            <View style={styles.pagination}>
              {slides.map((_, index) => (
                <Dot
                  key={index}
                  index={index}
                  currentIndex={divide(x, width)}
                />
              ))}
            </View>
            <Animated.View
              style={{
                flex: 1,
                flexDirection: 'row',
                width: width * slides.length,
                marginTop: 10,
                transform: [{ translateX: multiply(x, -1) }],
              }}>
              {slides.map(({ subTitle, description }, i) => {
                const last = slides.length - 1 === i
                return (
                  <SubSlide
                    key={i}
                    {...{ subTitle, description, last }}
                    onPress={() => {
                      if (last) {
                        navigation.navigate('Welcome')
                      } else {
                        scrl.current
                          ?.getNode()
                          .scrollTo({ x: width * (i + 1), animated: true })
                      }
                    }}
                  />
                )
              })}
            </Animated.View>
          </View>
        </Animated.View>
      </View>
    </View>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDER_HEIGHT,
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: theme.borderRadii.xl - 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomRightRadius: theme.borderRadii.xl,
    overflow: 'hidden',
  },
}))

export default Onboarding
