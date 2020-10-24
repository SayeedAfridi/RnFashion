import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Button, Text } from '../../components'

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
      <Text variant='title2' style={styles.subTitle}>
        {subTitle}
      </Text>
      <Text variant='body' style={styles.description}>
        {description}
      </Text>
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
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginBottom: 12,
  },
})

export default SubSlide
