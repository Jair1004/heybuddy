import React, { Component } from 'react'
import { KeyboardAvoidingView, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Avatar from "../Components/Avatar"
import Icon from "react-native-vector-icons/FontAwesome";
import { RNCamera } from "react-native-camera";

// Styles
import styles from './Styles/TitlePageScreenStyle'
import { Colors, Images } from "../Themes";

class TitlePageScreen extends Component {
  static navigationOptions = {
    headerRight: (
    <TouchableOpacity>
      <Avatar size={40}/>
    </TouchableOpacity>)
  }

  _onGetPhoto = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true }
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri);
    }
  }

  render () {
    return (
      <KeyboardAvoidingView style={{ backgroundColor : 'white', height: '100%' }} behavior="padding">
        <TextInput
          style={{
            height: 300,
            margin: 20,
            borderRadius: 6,
            borderWidth: 3,
            borderColor: Colors.blueBackground
          }}
          editable
          multiline
        />
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{flex: 0, justifyContent: 'flex-end', alignItems: 'center'}}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera'}
        />

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{ 
              marginRight : 10, 
              backgroundColor: Colors.pinkBackground, 
              borderRadius: 18.5, 
              alignItems: 'center',
              justifyContent: 'center',
              margin: 10,
              width: 36, 
              height: 36 }} 
          >
            <Icon name="camera" size={20} color={Colors.blueHeader} />
          </TouchableOpacity>
          <View 
          style={{
            width: 200,
            backgroundColor: Colors.pinkBackground,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 6,
            alignSelf: 'center',
            marginTop: 10,
            justifyContent: 'center'
          }}>
            <Text style={[styles.contentText, {fontSize: 20}]}>Add photo or video</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={{ 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: 300, 
            backgroundColor: Colors.blueHeader,
            flexDirection: 'row',
            borderRadius: 5,
            alignSelf: 'center',
            margin: 20,
        }}>
          <Text style={[styles.contentText]}>Save</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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

export default connect(mapStateToProps, mapDispatchToProps)(TitlePageScreen)
