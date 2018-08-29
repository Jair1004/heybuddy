import { StackNavigator } from 'react-navigation'
import MapScreen from '../Containers/MapScreen'
import LiveScreen from '../Containers/LiveScreen'
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
  MapScreen: { screen: MapScreen, navigationOptions: 
    { title: 'MapScreen', headerStyle: styles.orangeHeader}},
  LiveScreen: { screen: LiveScreen, navigationOptions: 
    { title: 'LiveScreen', headerStyle: styles.pinkHeader}},
  CheckedInScreen: { screen: CheckedInScreen, navigationOptions: 
    { title: 'CheckedInScreen', headerStyle: styles.blueHeader}},
  ConsentScreen: { screen: ConsentScreen, navigationOptions: 
    { title: 'ConsentScreen', headerStyle: styles.blueHeader}},
  CountDownTimerScreen: { screen: CountDownTimerScreen, navigationOptions: 
    { title: 'BUDDY TIMER', headerStyle: styles.orangeHeader}},
  FeedbackScreen: { screen: FeedbackScreen, navigationOptions: 
    { title: 'Feedback', headerStyle: styles.orangeHeader}},
  RateMeetUpScreen: { screen: RateMeetUpScreen, navigationOptions: 
    { title: 'Rate Meetup Space', headerStyle: styles.orangeHeader}},
  SayHapyBdayScreen: { screen: SayHapyBdayScreen, navigationOptions: 
    { title: '(: !!Say Happy Bday!! :)', headerStyle: styles.blueHeader}},
  HapyBdayScreen: { screen: HapyBdayScreen, navigationOptions: 
    { title: '(: !!Happy Bday!! :)', headerStyle: styles.blueHeader}},
  NotificationScreen: { screen: NotificationScreen, navigationOptions: 
    { title: 'Notifications', headerStyle: styles.blueHeader}},
  PasswordResetSuccessPageScreen: { screen: PasswordResetSuccessPageScreen, navigationOptions: 
    { title: 'Hey There! :)', headerStyle: styles.blueHeader}},
  PublishPageScreen: { screen: PublishPageScreen, navigationOptions: 
    { title: 'Pre written messages', headerStyle: styles.blueHeader}},
  TitlePageScreen: { screen: TitlePageScreen, navigationOptions: 
    { title: 'Title', headerStyle: styles.blueHeader}},
  ResourcesPageScreen: { screen: ResourcesPageScreen, navigationOptions: 
    { title: 'Resources', headerStyle: styles.blueHeader}},
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
