import { DrawerNavigationProp } from '@react-navigation/drawer'
import {
  CompositeNavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export interface StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigation: StackNavigationProp<ParamList, RouteName>
  route: RouteProp<ParamList, RouteName>
}

export interface AuthNavigationProps<
  RouteName extends keyof AuthenticationRoutes
> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthenticationRoutes, RouteName>,
    DrawerNavigationProp<AppRoutes, 'Home'>
  >
  route: RouteProp<AuthenticationRoutes, RouteName>
}

export type AppRoutes = {
  Authentication: undefined
  Home: undefined
}

export type AuthenticationRoutes = {
  Onboarding: undefined
  Welcome: undefined
  Login: undefined
  Signup: undefined
  ForgotPassword: undefined
  PasswordChanged: undefined
}

export type HomeRoutes = {
  OutfitIdeas: undefined
}
