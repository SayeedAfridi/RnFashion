import React, { ReactNode } from 'react'
import Svg, { Path, G } from 'react-native-svg'
import { Box } from '../../components'

const Google = () => {
  return (
    <Svg viewBox='0 0 512 512'>
      <Path
        d='M492.668 211.489l-208.84-.01c-9.222 0-16.697 7.474-16.697 16.696v66.715c0 9.22 7.475 16.696 16.696 16.696h117.606c-12.878 33.421-36.914 61.41-67.58 79.194L384 477.589c80.442-46.523 128-128.152 128-219.53 0-13.011-.959-22.312-2.877-32.785-1.458-7.957-8.366-13.785-16.455-13.785z'
        fill='#167ee6'
      />
      <Path
        d='M256 411.826c-57.554 0-107.798-31.446-134.783-77.979l-86.806 50.034C78.586 460.443 161.34 512 256 512c46.437 0 90.254-12.503 128-34.292v-.119l-50.147-86.81c-22.938 13.304-49.482 21.047-77.853 21.047z'
        fill='#12b347'
      />
      <Path
        d='M384 477.708v-.119l-50.147-86.81c-22.938 13.303-49.48 21.047-77.853 21.047V512c46.437 0 90.256-12.503 128-34.292z'
        fill='#0f993e'
      />
      <Path
        d='M100.174 256c0-28.369 7.742-54.91 21.043-77.847l-86.806-50.034C12.502 165.746 0 209.444 0 256s12.502 90.254 34.411 127.881l86.806-50.034c-13.301-22.937-21.043-49.478-21.043-77.847z'
        fill='#ffd500'
      />
      <Path
        d='M256 100.174c37.531 0 72.005 13.336 98.932 35.519 6.643 5.472 16.298 5.077 22.383-1.008l47.27-47.27c6.904-6.904 6.412-18.205-.963-24.603C378.507 23.673 319.807 0 256 0 161.34 0 78.586 51.557 34.411 128.119l86.806 50.034c26.985-46.533 77.229-77.979 134.783-77.979z'
        fill='#ff4b26'
      />
      <Path
        d='M354.932 135.693c6.643 5.472 16.299 5.077 22.383-1.008l47.27-47.27c6.903-6.904 6.411-18.205-.963-24.603C378.507 23.672 319.807 0 256 0v100.174c37.53 0 72.005 13.336 98.932 35.519z'
        fill='#d93f21'
      />
    </Svg>
  )
}

const FaceBook = () => {
  return (
    <Svg viewBox='0 0 512 512'>
      <Path
        d='M384 176h-96v-64c0-17.664 14.336-32 32-32h32V0h-64c-53.024 0-96 42.976-96 96v80h-64v80h64v256h96V256h64l32-80z'
        fill='#1976d2'
      />
    </Svg>
  )
}

const Apple = () => {
  return (
    <Svg viewBox='0 0 13.802 13.802'>
      <G fill='#030104'>
        <Path d='M10.668 7.333c-.018-1.749 1.426-2.586 1.49-2.628-.811-1.185-2.073-1.348-2.524-1.366-1.073-.11-2.096.632-2.642.632-.544 0-1.386-.617-2.277-.601-1.172.018-2.251.682-2.855 1.73-1.217 2.112-.312 5.24.874 6.955.58.838 1.272 1.779 2.179 1.746.874-.035 1.204-.566 2.261-.566s1.354.566 2.278.549c.941-.018 1.536-.855 2.111-1.695.666-.973.94-1.916.957-1.963-.022-.012-1.833-.705-1.852-2.793zM8.93 2.204c.481-.583.807-1.395.718-2.204-.695.028-1.534.461-2.033 1.045-.447.517-.836 1.342-.732 2.135.774.061 1.566-.394 2.047-.976z' />
      </G>
    </Svg>
  )
}

interface SocialIconProps {
  children: ReactNode
}

const SocialIcon: React.FC<SocialIconProps> = ({
  children,
}: SocialIconProps) => {
  return (
    <Box
      marginHorizontal='s'
      backgroundColor='white'
      padding='s'
      borderRadius='round'
      width={50}
      height={50}>
      {children}
    </Box>
  )
}

const SocialLogin = () => {
  return (
    <Box flexDirection='row' justifyContent='center'>
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <FaceBook />
      </SocialIcon>
      <SocialIcon>
        <Apple />
      </SocialIcon>
    </Box>
  )
}

export default SocialLogin