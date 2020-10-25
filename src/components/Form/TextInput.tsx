import React from 'react'
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RnTextInputProps,
} from 'react-native'
import theme, { Box } from '../theme'
import Icon from 'react-native-vector-icons/Feather'

interface TextInputProps extends RnTextInputProps {
  icon: string
  placeholder: string
  error?: string
  touched?: boolean
}

const TextInput: React.FC<TextInputProps> = ({
  icon,
  error,
  touched,
  ...props
}: TextInputProps) => {
  const reColor: keyof typeof theme.colors = !touched
    ? 'darkGrey'
    : !error
    ? 'primary'
    : 'danger'

  const color = theme.colors[reColor]

  return (
    <Box
      borderWidth={StyleSheet.hairlineWidth}
      flexDirection='row'
      alignItems='center'
      borderRadius='s'
      height={52}
      borderColor={reColor}
      margin='s'>
      <Icon
        name={icon}
        size={16}
        style={{ paddingHorizontal: 8 }}
        color={color}
      />
      <RNTextInput
        underlineColorAndroid='transparent'
        style={{ flex: 1 }}
        placeholderTextColor={theme.colors.darkGrey}
        {...props}
      />
      {touched ? (
        <Icon
          style={{ paddingHorizontal: 8 }}
          size={16}
          name={!error ? 'check-circle' : 'x-circle'}
          color={color}
        />
      ) : null}
    </Box>
  )
}

export default TextInput