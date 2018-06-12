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
  CheckedInScreen: { screen: CheckedInScreen, navigationOptions: 
    { title: 'CheckedInScreen', headerStyle: styles.blueHeader}},
  ConsentScreen: { screen: ConsentScreen, navigationOptions: 
    { title: 'ConsentScreen', headerStyle: styles.blueHeader}},
  CountDownTimerScreen: { screen: CountDownTimerScreen, navigationOptions: 
    { title: 'CountDownTimerScreen', headerStyle: styles.blueHeader}},
  RateMeetUpScreen: { screen: RateMeetUpScreen, navigationOptions: 
    { title: 'RateMeetUpScreen', headerStyle: styles.blueHeader}},
  FeedbackScreen: { screen: FeedbackScreen, navigationOptions: 
    { title: 'FeedbackScreen', headerStyle: styles.blueHeader}},
  SayHapyBdayScreen: { screen: SayHapyBdayScreen, navigationOptions: 
    { title: 'SayHapyBdayScreen', headerStyle: styles.blueHeader}},
  HapyBdayScreen: { screen: HapyBdayScreen, navigationOptions: 
    { title: 'HapyBdayScreen', headerStyle: styles.blueHeader}},
  NotificationScreen: { screen: NotificationScreen, navigationOptions: 
    { title: 'NotificationScreen', headerStyle: styles.blueHeader}},
  PasswordResetSuccessPageScreen: { screen: PasswordResetSuccessPageScreen, navigationOptions: 
    { title: 'PasswordResetSuccessPageScreen', headerStyle: styles.blueHeader}},
  PublishPageScreen: { screen: PublishPageScreen, navigationOptions: 
    { title: 'PublishPageScreen', headerStyle: styles.blueHeader}},
  TitlePageScreen: { screen: TitlePageScreen, navigationOptions: 
    { title: 'TitlePageScreen', headerStyle: styles.blueHeader}},
  ResourcesPageScreen: { screen: ResourcesPageScreen, navigationOptions: 
    { title: 'ResourcesPageScreen', headerStyle: styles.blueHeader}},
  ShowSomeLoveScreen: { screen: ShowSomeLoveScreen, navigationOptions: 
    { title: 'Show some love', headerStyle: styles.blueHeader}},
  WillYouHelpScreen: { screen: WillYouHelpScreen, navigationOptions: 
    { title: 'Will You Help?', headerStyle: styles.orangeHeader}},
  LaunchScreen: { screen: LaunchScreen, navigationOptions: 
    { title: 'LaunchScreen', headerStyle: styles.orangeHeader}}
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerTintColor: 'white'
  }
})

export default PrimaryNav
