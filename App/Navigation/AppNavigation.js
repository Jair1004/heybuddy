import { StackNavigator } from 'react-navigation'
import CheckedInScreen from '../Containers/CheckedInScreen'
import ConsentScreen from '../Containers/ConsentScreen'
import CountDownTimerScreen from '../Containers/CountDownTimerScreen'
import RateMeetUpScreen from '../Containers/RateMeetUpScreen'
import FeedbackScreen from '../Containers/FeedbackScreen'
import SayHapyBdayScreen from '../Containers/SayHapyBdayScreen'
import HapyBdayScreen from '../Containers/HapyBdayScreen'
import NotificationScreen from '../Containers/NotificationScreen'
import PasswordResetSuccessPageScreen from '../Containers/PasswordResetSuccessPageScreen'
import PublishPageScreen from '../Containers/PublishPageScreen'
import TitlePageScreen from '../Containers/TitlePageScreen'
import ResourcesPageScreen from '../Containers/ResourcesPageScreen'
import ShowSomeLoveScreen from '../Containers/ShowSomeLoveScreen'
import WillYouHelpScreen from '../Containers/WillYouHelpScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  CheckedInScreen: { screen: CheckedInScreen, navigationOptions: {title: 'CheckedInScreen'}},
  ConsentScreen: { screen: ConsentScreen, navigationOptions: {title: 'ConsentScreen'}},
  CountDownTimerScreen: { screen: CountDownTimerScreen, navigationOptions: {title: 'CountDownTimerScreen'}},
  RateMeetUpScreen: { screen: RateMeetUpScreen, navigationOptions: {title: 'RateMeetUpScreen'}},
  FeedbackScreen: { screen: FeedbackScreen, navigationOptions: {title: 'FeedbackScreen'}},
  SayHapyBdayScreen: { screen: SayHapyBdayScreen, navigationOptions: {title: 'SayHapyBdayScreen'}},
  HapyBdayScreen: { screen: HapyBdayScreen, navigationOptions: {title: 'HapyBdayScreen'}},
  NotificationScreen: { screen: NotificationScreen, navigationOptions: {title: 'NotificationScreen'}},
  PasswordResetSuccessPageScreen: { screen: PasswordResetSuccessPageScreen, navigationOptions: {title: 'PasswordResetSuccessPageScreen'}},
  PublishPageScreen: { screen: PublishPageScreen, navigationOptions: {title: 'PublishPageScreen'}},
  TitlePageScreen: { screen: TitlePageScreen, navigationOptions: {title: 'TitlePageScreen'}},
  ResourcesPageScreen: { screen: ResourcesPageScreen, navigationOptions: {title: 'ResourcesPageScreen'}},
  ShowSomeLoveScreen: { screen: ShowSomeLoveScreen, navigationOptions: {title: 'ShowSomeLoveScreen'}},
  WillYouHelpScreen: { screen: WillYouHelpScreen, navigationOptions: {title: 'WillYouHelpScreen'}},
  LaunchScreen: { screen: LaunchScreen, navigationOptions: {title: 'LaunchScreen'}}
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
