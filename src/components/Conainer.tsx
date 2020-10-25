import React, { ReactNode } from 'react'
import { Dimensions, Image, StyleSheet, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Box } from './theme'

interface ContainerProps {
  children: ReactNode
  footer: ReactNode
}

const { width, height: s } = Dimensions.get('window')

const aspectRatio = 2400 / 3200
const height = width * aspectRatio
const patterns = [require('../assets/paterns/1.png')]
const BOX_HEIGHT = height * 0.5

const Conainer: React.FC<ContainerProps> = ({
  children,
  footer,
}: ContainerProps) => {
  const insets = useSafeAreaInsets()
  return (
    <ScrollView>
      <Box height={s} flex={1} backgroundColor='secondary'>
        <Box backgroundColor='white'>
          <Box
            borderBottomLeftRadius='xl'
            backgroundColor='white'
            overflow='hidden'
            height={BOX_HEIGHT}>
            <Image
              source={patterns[0]}
              style={{
                width,
                height,
              }}
            />
          </Box>
        </Box>
        <Box flex={1} overflow='hidden'>
          <Image
            source={patterns[0]}
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height,
              top: -BOX_HEIGHT,
            }}
          />
          <Box
            flex={1}
            backgroundColor='white'
            borderRadius='xl'
            borderTopLeftRadius='none'>
            {children}
          </Box>
        </Box>
        <Box
          backgroundColor='secondary'
          paddingTop='m'
          style={{ paddingBottom: insets.bottom }}>
          {footer}
        </Box>
      </Box>
    </ScrollView>
  )
}

export default Conainer
