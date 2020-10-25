import React from 'react'
import { Box, Text } from '../theme'
import Icon from 'react-native-vector-icons/Feather'
import { RectButton } from 'react-native-gesture-handler'
import { useTheme } from '@shopify/restyle'

interface CheckboxProps {
  label: string
  onChange: (v: boolean) => void
  checked: boolean
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
}: CheckboxProps) => {
  const theme = useTheme()
  return (
    <RectButton activeOpacity={0} onPress={() => onChange(!checked)}>
      <Box flexDirection='row' alignItems='center'>
        <Box
          borderColor={checked ? 'primary' : 'darkGrey'}
          borderRadius='s'
          borderWidth={0.5}
          height={20}
          width={20}
          justifyContent='center'
          alignItems='center'
          marginRight='s'
          backgroundColor={checked ? 'primary' : 'white'}>
          <Icon
            name='check'
            color={checked ? 'white' : theme.colors.darkGrey}
            size={16}
          />
        </Box>
        <Text variant='button'>{label}</Text>
      </Box>
    </RectButton>
  )
}

export default Checkbox
