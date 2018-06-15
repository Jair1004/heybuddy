import React, { Component } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Avatar from "../Components/Avatar"
import Icon from "react-native-vector-icons/FontAwesome";
import { RNCamera } from "react-native-camera";


// Styles
import styles from './Styles/SayHapyBdayScreenStyle'
import { Colors, Images } from "../Themes";

class SayHapyBdayScreen extends Component {
  _onGetPhoto = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true }
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri);
    }
  }

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
        
        <Text style={[styles.contentText, {color: 'red'}]}>They</Text>
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
        <TouchableOpacity
          style={{ 
            flexDirection: 'row', backgroundColor: Colors.blueHeader, 
            position: 'absolute', bottom: 0, justifyContent: 'center', alignItems: 'center',
            width: '100%', height: 60,}}
            onPress={this._onGetPhoto}
        >
          <View
            style={{ 
              marginRight : 10, 
              backgroundColor: Colors.pinkBackground, 
              borderRadius: 18.5, 
              alignItems: 'center',
              justifyContent: 'center',
              margin: 10,
              width: 36, 
              height: 36 }}
            onPress={this._onGetPhoto}
          >
            <Icon name="camera" size={20} color={Colors.blueHeader} />
          </View>
          <Text style={[styles.contentText, {fontSize: 20}]}>Add photo or video</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(SayHapyBdayScreen)
