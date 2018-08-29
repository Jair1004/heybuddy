import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text, Image, View, FlatList, TouchableHighlight } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  // prop type warnings
  static propTypes = {
    screenList: PropTypes.array,
  }

  // defaults for props
  static defaultProps = {
    screenList: [
      {
        id: "1",
        key: "WillYouHelpScreen"
      },
      {
        id: "2",
        key: "ShowSomeLoveScreen"
      },
      {
        id: "3",
        key: "ResourcesPageScreen"
      },
      {
        id: "4",
        key: "TitlePageScreen"
      },
      {
        id: "5",
        key: "PublishPageScreen"
      },
      {
        id: "6",
        key: "PasswordResetSuccessPageScreen"
      },
      {
        id: "7",
        key: "NotificationScreen"
      },
      {
        id: "8",
        key: "HapyBdayScreen"
      },
      {
        id: "9",
        key: "SayHapyBdayScreen"
      },
      {
        id: "10",
        key: "RateMeetUpScreen"
      },
      {
        id: "11",
        key: "FeedbackScreen"
      },
      {
        id: "12",
        key: "CountDownTimerScreen"
      },
      {
        id: "13",
        key: "ConsentScreen"
      },
      {
        id: "14",
        key: "CheckedInScreen"
      },
      {
        id: "15",
        key: "MapScreen"
      },
      {
        id: "16",
        key: "LiveScreen"
      },

    ]
  }

  _onPress = (screen) => {
    this.props.navigation.navigate(screen);
  }

  _renderItems = ({item, separators}) => {
    return (
      <TouchableHighlight style={{ alignContent : 'center', justifyContent : 'center', height : 40, width : '100%' }}
        onPress={() => this._onPress(item.key)}
        onShowUnderlay={separators.highlight}
        onHideUnderlay={separators.unhighlight}
      >
        <Text style={{ textAlign : 'center' }}>
          {item.key}
        </Text>
      </TouchableHighlight>
    );
  }

  _keyExtractor = (item, index) => item.id

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <FlatList
            ItemSeparatorComponent={({highlighted}) => (
              <View style={[highlighted && {marginLeft: 0}]} />
            )}
            data={this.props.screenList}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItems}
          />
        </ScrollView>
      </View>
    )
  }
}
