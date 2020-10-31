import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Box, Text } from '../../components'
import SocialLogin from './SocialLogin'

interface FooterProps {
  onPress: () => void
  title: string
  action: string
}

const Footer: React.FC<FooterProps> = ({
  onPress,
  title,
  action,
}: FooterProps) => {
  return (
    <Box justifyContent='center' alignItems='center' marginBottom='s'>
      <SocialLogin />
      <TouchableWithoutFeedback
        onPress={onPress}
        style={{ flexDirection: 'row', marginVertical: 8 }}>
        <Text variant='button' color='white'>
          {title}{' '}
        </Text>
        <Text variant='button' color='primary'>
          {action}
        </Text>
      </TouchableWithoutFeedback>
    </Box>
  )
}

export default Footer
