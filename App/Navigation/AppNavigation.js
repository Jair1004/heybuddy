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
  CheckedInScreen: { screen: CheckedInScreen },
  ConsentScreen: { screen: ConsentScreen },
  CountDownTimerScreen: { screen: CountDownTimerScreen },
  RateMeetUpScreen: { screen: RateMeetUpScreen },
  FeedbackScreen: { screen: FeedbackScreen },
  SayHapyBdayScreen: { screen: SayHapyBdayScreen },
  HapyBdayScreen: { screen: HapyBdayScreen },
  NotificationScreen: { screen: NotificationScreen },
  PasswordResetSuccessPageScreen: { screen: PasswordResetSuccessPageScreen },
  PublishPageScreen: { screen: PublishPageScreen },
  TitlePageScreen: { screen: TitlePageScreen },
  ResourcesPageScreen: { screen: ResourcesPageScreen },
  ShowSomeLoveScreen: { screen: ShowSomeLoveScreen },
  WillYouHelpScreen: { screen: WillYouHelpScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
