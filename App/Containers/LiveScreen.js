import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'

import Avatar from '../Components/Avatar'
import LiveComment from '../Components/LiveComment'
import PhotoVideoButton from '../Components/PhotoVideoButton'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LiveScreenStyle'
import { Colors, Images } from '../Themes'

class LiveScreen extends Component {
  static navigationOptions = {
    headerLeft: ( 
      <View style={{ flexDirection: 'row'}}>
        <Image source={Images.thumbsUpSign} style={{width: 20, height: 20, marginTop: 10, marginLeft: 10}} />
        <TouchableOpacity style={{ padding: 10, alignItems: 'center' }}>
          <Avatar size={30} borderColor={Colors.blueHeader} />
          <Text style={[styles.contentText, {fontSize : 15}]}>username</Text>
        </TouchableOpacity>
      </View>
    ),
    headerTitle: (
      <View style={{ marginLeft : 70, flexDirection: 'row', alignItems: 'center'}}>
        <Text style={[styles.contentText, {fontSize : 30}]}>Live</Text>
        <Icon name="check" 
          size={30} 
          color='white' 
          style={{ margin : 10, borderColor: Colors.blueHeader, borderWidth: 3, borderRadius: 20, paddingLeft: 5, paddingTop: 5 }} />
      </View>
    ),
    headerRight:(
      <TouchableOpacity style={{ padding: 10, alignItems: 'center' }}>
        <Image source={Images.pushpin} style={{width: 20, height: 20}} />
        <Text style={[styles.contentText, {fontSize : 15}]}>location</Text>
      </TouchableOpacity>
    ),
    headerTitleStyle: styles.titleText
  }

  render () {
    return (
      <View style={{ backgroundColor : Colors.pinkBackground, flex: 1 }}> 
        <ScrollView style={{padding: 10}}>
          <Text style={[styles.contentText, {fontSize : 15}]}>Filter by:</Text>
          <View 
            style={{ 
              flexDirection: 'row', 
              justifyContent: 'center', 
              padding : 20, 
              borderBottomWidth: 3, 
              borderColor: Colors.blueHeader}}>
            <View style={{flex: 1, borderRightWidth: 2, padding: 5, borderColor: Colors.orangeHeader, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
              <Image source={Images.pushpin} style={{width: 40, height: 40, backgroundColor: 'white'}} />
              <TouchableOpacity 
                style={{
                  backgroundColor: Colors.pinkBackground,
                  borderRadius: 5,
                  borderColor: 'black',
                  padding: 10,
                  borderWidth: 1,
                  margin: 5
                }}>
                <Text style={[styles.contentText, {fontSize : 25}]}>Posts</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, borderLeftWidth: 2, padding: 5, borderColor: Colors.orangeHeader, flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity 
                style={{
                  backgroundColor: Colors.orangeHeader,
                  borderRadius: 5,
                  borderColor: 'black',
                  padding: 10,
                  borderWidth: 1,
                  margin: 5
                }}>
                <Text style={[styles.contentText, {fontSize : 25}]}>Videos</Text>
              </TouchableOpacity>
              <Image source={Images.cameraWithFlash} style={{width: 40, height: 40, backgroundColor: 'white'}} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', padding : 5, height: 60 }}>
            <Avatar size={40} borderColor={Colors.blueHeader} />
            <Text style={[styles.contentText, 
              {fontSize : 15, 
                borderBottomWidth: 4, 
                borderColor: Colors.blueHeader, 
                alignSelf: 'flex-end', 
                color: Colors.orangeHeader,
                padding: 5}]}>My comments</Text>
            <Text style={[styles.contentText, {fontSize : 15}]}>August 8 2018</Text>
            <Text style={[styles.contentText, 
              {fontSize : 15, 
                borderBottomWidth: 4, 
                borderColor: Colors.blueHeader, 
                alignSelf: 'flex-end',
                color: Colors.orangeHeader,
                padding: 5}]}>public comments</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20}}>
            <Text style={[styles.contentText, {fontSize : 15, position: 'absolute', top: 30, left: 10 }]}>#1.</Text>
            <LiveComment />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{alignItems: 'center'}}>
              <Text style={[styles.contentText, {margin: 10, fontSize : 15, color: Colors.orangeHeader, borderBottomWidth: 4, borderColor: Colors.blueHeader}]}>Photos</Text>
              <TouchableOpacity style={{ borderWidth: 4, borderRadius: 25, borderColor: Colors.blueHeader, width: 50, height: 50}}>
              </TouchableOpacity>
              <Text style={[styles.contentText, {margin: 10, fontSize : 15}]}>2 hour ago</Text>
            </View>
            <PhotoVideoButton />
            <View style={{alignItems: 'center'}}>
              <Text style={[styles.contentText, {margin: 10, fontSize : 15, color: Colors.orangeHeader, borderBottomWidth: 4, borderColor: Colors.blueHeader}]}>Videos</Text>
              <TouchableOpacity style={{ borderWidth: 4, borderRadius: 5, borderColor: Colors.blueHeader, width: 50, height: 50}}>
              </TouchableOpacity>
              <Text style={[styles.contentText, {margin: 10, fontSize : 15}]}>5 min ago</Text>
            </View>
          </View>
        </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(LiveScreen)
