import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Avatar from '../Components/Avatar.js'
import Icon from 'react-native-vector-icons/FontAwesome'
import FullButton from '../Components/FullButton'
import ProgressCircle from 'react-native-progress-circle'

// Styles
import styles from './Styles/CountDownTimerScreenStyle'
import { Colors } from "../Themes";

class CountDownTimerScreen extends Component {
  static navigationOptions = {
    headerRight:(<View
                    style={{ flexDirection : 'row' }}
                  >
                  <TouchableOpacity>
                    <Icon name="ellipsis-h" size={30} color='white' style={{ marginRight : 10 }} />
                  </TouchableOpacity>
                </View>),
    headerTitleStyle: styles.titleText
  }

  render () {
    return (
      <View style={{ backgroundColor : Colors.orangeBackground, flex: 1, alignItems: 'center' }}>
        <Avatar size={130} />
        <View style={{
          backgroundColor: Colors.blueBackground,
          width: 150,
          height: 35,
          borderRadius: 15
        }}>
          <Text style={[styles.contentText, {}]}>Are you ok?</Text>
        </View>
        <View style={{width: '100%', alignItems: 'center', justifyContent: 'center', padding: 20}}>
          <ProgressCircle
            percent={20}
            radius={100}
            borderWidth={30}
            color='#999'
            shadowColor='#FF9E92'
            bgColor={Colors.orangeBackground}
          >
            <Text style={styles.contentText}>00:00:00</Text>
          </ProgressCircle>
        </View>
        <Text style={[styles.contentText, {fontSize: 15}]}>ROTATE DIAL TO CHANGE TIME</Text>

        <View style={{ position : 'absolute', bottom : 0 , flexDirection : 'row'}}>
          <FullButton
            text='Yes'
            styles={{ backgroundColor: Colors.orangeHeader, flex: 1 }}
          />
          <View style={{ width: 2, backgroundColor : 'white' }} />
          <FullButton
            text='No'
            styles={{ backgroundColor: Colors.orangeHeader, flex : 1 }}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountDownTimerScreen)
