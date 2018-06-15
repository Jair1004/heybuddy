import React, { Component } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Avatar from "../Components/Avatar"
import Icon from "react-native-vector-icons/FontAwesome";

// Styles
import styles from './Styles/HapyBdayScreenStyle'
import { Colors } from "../Themes";

class HapyBdayScreen extends Component {
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
        
        <Text style={[styles.contentText, {color: 'red'}]}>You just</Text>
        <View
          style={{ 
            margin : 10, 
            backgroundColor: Colors.pinkBackground, 
            borderWidth: 5,
            borderColor: 'yellow',
            borderRadius: 60, 
            alignItems: 'center',
            justifyContent: 'center',
            width: 120, 
            height: 120 }} 
        >
          <Text style={[styles.contentText, {fontSize: 55}]}>21</Text>
        </View>
        <Text style={[styles.contentText, {color: 'red'}]}>Turned</Text>
        <TouchableOpacity
          style={{ 
            flexDirection: 'row', backgroundColor: Colors.blueHeader, 
            position: 'absolute', bottom: 0, justifyContent: 'center', alignItems: 'center',
            width: '100%', height: 60,}}
        >
          <Icon style={{marginHorizontal: 10}} name="apple" size={50} color='yellow' />
          <Text style={[styles.contentText, {fontSize: 35}]}>Next</Text>
          <Icon style={{marginHorizontal: 10}} name="apple" size={50} color='yellow' />
        </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(HapyBdayScreen)
