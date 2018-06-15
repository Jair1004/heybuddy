import React, { Component } from 'react'
import { View, Image, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Rate from '../Components/Rate'
import FullButton from '../Components/FullButton'

// Styles
import styles from './Styles/FeedbackScreenStyle'
import { Colors, Images } from "../Themes";

class FeedbackScreen extends Component {
  render () {
    return (
      <View style={{ backgroundColor : Colors.orangeBackground, flex: 1, alignItems: 'center', paddingVertical: 20 }}>
        <Rate style={{marginTop: 20}}/>
        <TextInput 
          style={{
            color: 'black', 
            width: '95%', 
            height: 250, 
            marginTop: 20, 
            backgroundColor: 'white', 
            borderRadius: 5, 
          }}
          editable
        />
        <View style={{width: '95%', height: 60, marginTop: 20, flexDirection: 'row'}}>
          <FullButton styles={{borderRadius: 6, backgroundColor: Colors.blueBackground, marginRight: 5, flex: 1}} text='Rate Us' />
          <FullButton styles={{borderRadius: 6, backgroundColor: Colors.blueBackground, marginLeft: 5, flex: 1}} text='Send' />
        </View>

        <View 
          style={{ 
            alignItems: 'center', 
            justifyContent: 'center', 
            position: 'absolute', 
            bottom: 0, 
            height: 60, 
            width: '100%', 
            backgroundColor: Colors.orangeHeader 
        }}>
          <Image style={{ width: 200, height: 55 }} ResizeMode='contain' source={Images.buddyLogo} />
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

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackScreen)
