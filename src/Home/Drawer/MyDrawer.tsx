import React from 'react'
import { Box, RoundedIconButton, Text } from '../../components'
import { Dimensions } from 'react-native'
import DrawerItem, { DrawerItemProps } from './DrawerItem'

const { width } = Dimensions.get('window')
export const DRAWER_WIDTH = width * 0.8

const aspectRatio = 2400 / 3200
const height = DRAWER_WIDTH * aspectRatio
const BOX_HEIGHT = height * 0.4

const items: DrawerItemProps[] = [
  {
    icon: 'zap',
    label: 'Outfit Ideas',
    screen: 'OutfitIdeas',
    color: 'primary',
  },
  {
    icon: 'heart',
    label: 'Favourite Outfit',
    screen: 'FavouriteOutfit',
    color: 'orange',
  },
  {
    icon: 'user',
    label: 'Edit Profile',
    screen: 'EditProfile',
    color: 'yellow',
  },
  {
    icon: 'clock',
    label: 'Transaction History',
    screen: 'TransactionHistory',
    color: 'pink',
  },
  {
    icon: 'settings',
    label: 'Notifications Settings',
    screen: 'NotificationsSettings',
    color: 'violet',
  },
  {
    icon: 'log-out',
    label: 'Logout',
    screen: 'Logout',
    color: 'secondary',
  },
]

const MyDrawer = () => {
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor='white'>
        <Box
          position='absolute'
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius='xl'
          backgroundColor='secondary'
        />
        <Box
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          paddingVertical='m'
          paddingHorizontal='s'>
          <RoundedIconButton
            onPress={() => true}
            name='x'
            size={32}
            color='white'
            backgroundColor='secondary'
            iconRatio={0.6}
          />
          <Text color='white'>MY PROFILE</Text>
          <RoundedIconButton
            onPress={() => true}
            name='shopping-bag'
            size={32}
            color='white'
            iconRatio={0.6}
            backgroundColor='secondary'
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor='secondary' />
        <Box
          position='absolute'
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor='white'
          borderTopLeftRadius='xl'
          borderBottomRightRadius='xl'
          justifyContent='center'
          padding='l'>
          <Box
            position='absolute'
            top={-50}
            left={DRAWER_WIDTH / 2 - 50}
            right={0}
            bottom={0}
            backgroundColor='primary'
            borderRadius='round'
            width={100}
            height={100}
            alignSelf='center'
          />
          <Box marginVertical='m'>
            <Text variant='title1' textAlign='center'>
              Sayeed Afridi
            </Text>
            <Text variant='body' textAlign='center'>
              as.afridi563@gmail.com
            </Text>
          </Box>

          {items.map((item, i) => (
            <DrawerItem key={i} {...item} />
          ))}
        </Box>
      </Box>
      <Box
        height={BOX_HEIGHT}
        overflow='hidden'
        width={DRAWER_WIDTH}
        borderTopLeftRadius='xl'
        backgroundColor='secondary'
      />
    </Box>
  )
}

export default MyDrawer
