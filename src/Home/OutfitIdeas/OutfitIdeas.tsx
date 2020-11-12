import React from 'react'
import { Box, Header } from '../../components'
const OutfitIdeas = () => {
  return (
    <Box flex={1} backgroundColor='white'>
      <Header
        left={{ icon: 'menu', onPress: () => true }}
        title='outfit ideas'
        right={{ icon: 'shopping-bag', onPress: () => true }}
      />
    </Box>
  )
}

export default OutfitIdeas
