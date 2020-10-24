import React, { ReactNode } from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import theme, { Box } from './theme'

interface ContainerProps {
  children: ReactNode
  footer: ReactNode
}

const { width } = Dimensions.get('window')

const aspectRatio = 2400 / 3200
const height = width * aspectRatio
const patterns = [require('../assets/paterns/1.png')]

const Conainer: React.FC<ContainerProps> = ({
  children,
  footer,
}: ContainerProps) => {
  const insets = useSafeAreaInsets()
  return (
    <Box flex={1} backgroundColor='secondary'>
      <Box backgroundColor='white'>
        <Box
          borderBottomLeftRadius='xl'
          backgroundColor='white'
          overflow='hidden'
          height={height * 0.61}>
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
            top: -height * 0.61,
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
  )
}

export default Conainer
