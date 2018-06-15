import React, { Component } from 'react'
import { TouchableOpacity, Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Avatar from "../Components/Avatar"
import Icon from "react-native-vector-icons/FontAwesome";

// Styles
import styles from './Styles/CheckedInScreenStyle'
import { Colors, Images } from "../Themes";

class CheckedInScreen extends Component {
  render () {
    return (
      <View style={{ backgroundColor : 'white', flex: 1, alignItems: 'center' }}>
        <View style={{alignItems: 'center', justifyContent: 'center', height: 240,
          borderColor: Colors.blueBackground, borderBottomWidth: 3, marginVertical: 10, width: '100%'
        }}>
          <Icon size={50} name="rocket" style={{position: 'absolute', left: 10, top: 10}}/>
          <Icon size={50} name="rocket" style={{position: 'absolute', right: 10, top: 10}}/>
          <Avatar size={180} />
          <Text style={[styles.contentText, { color: Colors.blueBackground }]}>Rachel Banks</Text>
        </View>
        
        <Text style={[styles.contentText, {color: 'red'}]}>You just</Text>
        <View
          style={{ 
            margin : 10, 
            backgroundColor: 'yellow', 
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 60, 
            alignItems: 'center',
            justifyContent: 'center',
            width: 120, 
            height: 120 }} 
        >
          <Icon size={100} name="check" color={Colors.pinkBackground}/>
        </View>
        <Text style={[styles.contentText, {color: 'red'}]}>Checked in</Text>
        <TouchableOpacity
          style={{ 
            flexDirection: 'row', backgroundColor: Colors.blueHeader, 
            position: 'absolute', bottom: 0, justifyContent: 'center', alignItems: 'center',
            width: '100%', height: 60
          }}
        >
          <Image style={{ width: 200, height: 55 }} ResizeMode='contain' source={Images.buddyLogo} />
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckedInScreen)
