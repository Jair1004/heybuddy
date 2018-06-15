import React, { Component } from 'react'
import { View, Image, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Rate from '../Components/Rate'

// Styles
import styles from './Styles/RateMeetUpScreenStyle'
import { Colors, Images } from "../Themes";

class RateMeetUpScreen extends Component {
  render () {
    return (
      <View style={{ backgroundColor : Colors.orangeBackground, flex: 1, alignItems: 'center', padding: 20 }}>
        <Image source={Images.buddyLogo} style={{width: 300, height: 80}} />
        <Text style={[styles.contentText, { marginTop: 20, width: 290 }]}>
          What did you think of White Star Ale House?
        </Text>
        <Rate style={{marginTop: 20}}/>
        <TextInput 
          style={{color: 'black', width: '95%', height:30, borderWidth: 1, marginTop: 20}}
          editable
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(RateMeetUpScreen)
