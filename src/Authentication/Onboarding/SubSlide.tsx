import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Button from '../../components/Button/Button'

const { width } = Dimensions.get('window')

interface SubSlideProps {
  subTitle: String
  description: String
  last?: boolean
  onPress: () => void
}

const SubSlide: React.FC<SubSlideProps> = ({
  subTitle,
  description,
  last,
  onPress,
}: SubSlideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        {...{ onPress }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width,
    padding: 44,
  },
  subTitle: {
    fontFamily: 'SFProText-Semibold',
    fontSize: 24,
    textAlign: 'center',
    color: '#000034',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    fontFamily: 'SFProText-Regular',
    color: '#0c0d34',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
})

export default SubSlide
