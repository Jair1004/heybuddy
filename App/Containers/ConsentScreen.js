import React, { Component } from 'react'
import { View, Image, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Icon from 'react-native-vector-icons/FontAwesome'
import Avatar from '../Components/Avatar.js'
import FullButton from '../Components/FullButton'

// Styles
import styles from './Styles/ConsentScreenStyle'
import { Images, Colors } from "../Themes";

class ConsentScreen extends Component {
  render () {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={{borderTopWidth: 15, borderBottomWidth: 15, borderColor: Colors.pinkBackground, alignItems: 'center'}}>
          <Image 
            source={Images.buddyLogo} 
            style={{width: 300, height: 80}}/>
        </View>
        <Text style={[styles.contentText, {fontSize: 40, color: Colors.blueBackground}]}>I Consent</Text>
        <View style={{
          height: 30,
          borderRadius: 6,
          borderColor: Colors.pinkBackground,
          borderWidth: 2,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          marginHorizontal: 10
        }}>
          <TextInput placeholder="Search" style={[styles.contentText, {color: 'black'}]} editable />
          <Icon size={20} name="search" color={Colors.pinkBackground} />
        </View>

        <View style={{flexDirection: 'row',  alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10}}>
          <Avatar size={130} />
          <Icon size={50} name="plus" color={Colors.blueBackground} />
          <Avatar size={130} />
        </View>

        <TextInput 
          style={{
            color: 'black', 
            width: '95%', 
            height: 200, 
            marginTop: 10, 
            backgroundColor: 'white', 
            borderRadius: 5, 
            borderWidth: 3,
            borderColor: Colors.pinkBackground,
            margin: 10
          }}
          editable
        />
        <View style={{height: 60, margin: 5, flexDirection: 'row'}}>
          <FullButton styles={{borderRadius: 6, backgroundColor: Colors.blueBackground, marginRight: 5, flex: 1}} text='Rate Us' />
          <FullButton styles={{borderRadius: 6, backgroundColor: Colors.blueBackground, marginLeft: 5, flex: 1}} text='Send' />
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

export default connect(mapStateToProps, mapDispatchToProps)(ConsentScreen)
