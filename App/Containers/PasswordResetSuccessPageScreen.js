import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Avatar from "../Components/Avatar"
import Icon from "react-native-vector-icons/FontAwesome";
import FullButton from "../Components/FullButton";

// Styles
import styles from './Styles/PasswordResetSuccessPageScreenStyle'
import { Colors, Images } from "../Themes";

class PasswordResetSuccessPageScreen extends Component {
  render () {
    return (
      <View style={{ backgroundColor : 'white', flex: 1, alignItems: 'center' }}>
        <View style={{alignItems: 'center', justifyContent: 'center', height: 240,
          borderColor: Colors.blueBackground, borderBottomWidth: 3, marginTop: 10, width: '100%'
        }}>
          <Icon size={50} name="rocket" style={{position: 'absolute', left: 10, top: 10}}/>
          <Icon size={50} name="rocket" style={{position: 'absolute', right: 10, top: 10}}/>
          <Avatar size={100} />
          <Text style={[styles.contentText, { color: Colors.blueBackground }]}>Rachel Banks</Text>
        </View>
        
        <Text style={[styles.contentText, {color: 'black'}]}>Success!</Text>
        <View
          style={{ 
            margin : 10, 
            backgroundColor: Colors.pinkBackground, 
            borderWidth: 5,
            borderColor: Colors.blueBackground,
            borderRadius: 40, 
            alignItems: 'center',
            justifyContent: 'center',
            width: 80, 
            height: 80 }} 
        >
          <Icon name="check" size={70} color='white' />
        </View>
        <Text style={[styles.contentText, {fontSize: 15, color: 'black'}]}>Password has successsfully changed</Text>
        <FullButton
          text='Continue'
          styles={{ backgroundColor: Colors.blueHeader, position: 'absolute', bottom: 0, width: '100%'}}
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

export default connect(mapStateToProps, mapDispatchToProps)(PasswordResetSuccessPageScreen)
