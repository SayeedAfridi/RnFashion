import React from 'react'
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RnTextInputProps,
} from 'react-native'
import { Box, useTheme } from '../theme'
import Icon from 'react-native-vector-icons/Feather'
import RoundedIcon from '../RoundedIcon'

interface TextInputProps extends RnTextInputProps {
  icon: string
  placeholder: string
  error?: string
  touched?: boolean
}
export type TextInputRef = RNTextInput

const SIZE = 18

const TextInput = React.forwardRef<TextInputRef, TextInputProps>(
  ({ icon, error, touched, ...props }: TextInputProps, ref) => {
    const theme = useTheme()
    theme
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
          size={SIZE}
          style={{ paddingHorizontal: 8 }}
          color={color}
        />
        <RNTextInput
          ref={ref}
          underlineColorAndroid='transparent'
          style={{ flex: 1 }}
          placeholderTextColor={theme.colors.darkGrey}
          {...props}
        />
        {touched ? (
          <Box marginHorizontal='s'>
            <RoundedIcon
              name={!error ? 'check' : 'x'}
              color='white'
              backgroundColor={error ? 'danger' : 'primary'}
              size={SIZE}
            />
          </Box>
        ) : null}
      </Box>
    )
  },
)

export default TextInput
