import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Avatar from "../Components/Avatar"
import Icon from "react-native-vector-icons/FontAwesome";

// Styles
import styles from './Styles/ResourcesPageScreenStyle'
import { Colors, Images } from "../Themes";

class ResourcesPageScreen extends Component {
  static navigationOptions = {
    headerRight: (
    <TouchableOpacity>
      <Avatar size={40}/>
    </TouchableOpacity>)
  }

  render () {
    return (
      <View style={{ backgroundColor : 'white', flex: 1 }}>
        <ScrollView style={{ marginBottom: 60 }}>
          <View style={{
            alignItems: 'center',
            height: 250,
            borderBottomWidth: 5,
            borderColor: Colors.blueHeader
          }}>
            <Image source={Images.buddyLogo} style={{width: 300, height: 80, margin: 20}}/>
          </View>

          <View 
            style={{
              width: 240,
              backgroundColor: Colors.pinkBackground,
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 6,
              alignSelf: 'center',
              marginTop: 10,
              justifyContent: 'center'
            }}>
            <Text style={[styles.contentText, {fontSize: 20}]}>Organization Resources</Text>
          </View>

          <View style={{ flexDirection : 'row', justifyContent : 'space-around', alignItems : 'center', padding : 10, margin: 20 }}>
            <Image style={{ width: 130, height: 35 }} ResizeMode='contain' source={Images.buddyLogo} />
            <Image style={{ width: 100, height: 100 }} source={Images.clearLogo} />
          </View>

        </ScrollView>

        <View 
          style={{ 
            alignItems: 'center', 
            justifyContent: 'center', 
            position: 'absolute', 
            bottom: 0, 
            height: 60, 
            width: '100%', 
            backgroundColor: Colors.blueHeader,
            flexDirection: 'row',
        }}>
          <View
            style={{ 
              marginRight : 10, 
              backgroundColor: Colors.pinkBackground, 
              borderWidth: 2,
              borderColor: 'black',
              borderRadius: 18.5, 
              alignItems: 'center',
              justifyContent: 'center',
              width: 36, 
              height: 36 }} 
          >
            <Icon name="plus" size={30} color={Colors.blueHeader} />
          </View>
          <Text style={[styles.contentText, {fontSize: 22}]}>Suggest a resource</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(ResourcesPageScreen)
