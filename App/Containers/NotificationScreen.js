import React, { Component } from 'react'
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Avatar from "../Components/Avatar"
import Icon from "react-native-vector-icons/FontAwesome";

// Styles
import styles from './Styles/NotificationScreenStyle'
import { Colors, Images } from "../Themes";

class NotificationScreen extends Component {
  render () {
    return (
      <View style={{ backgroundColor : 'white', flex: 1, alignItems: 'center' }}>
        <View style={{alignItems: 'center', justifyContent: 'center', height: 200,
          borderColor: Colors.blueBackground, borderBottomWidth: 3, marginTop: 10, width: '100%'
        }}>
          <View style={{ flexDirection : 'row', justifyContent : 'space-between', 
            alignItems : 'center', padding : 10 }}>
            <Image style={{ width: 130, height: 35 }} ResizeMode='contain' source={Images.buddyLogo} />
            <Avatar size={130} />
            <Image style={{ width: 100, height: 100 }} source={Images.clearLogo} />
          </View>
          <Text style={[styles.contentText, { color: Colors.blueBackground, fontSize: 15 }]}>Rachel Banks</Text>
        </View>

        <View style={{
          flexDirection: 'row',
          padding: 10,
          paddingHorizontal: 40,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: 80,
          borderBottomWidth: 3,
          borderColor: Colors.blueBackground
        }}>
          <TouchableOpacity
            style={{ 
              position: 'absolute',
              left: 5,
              top: 10,
              backgroundColor: Colors.pinkBackground, 
              borderWidth: 2,
              borderColor: Colors.blueBackground,
              borderRadius: 17.5, 
              alignItems: 'center',
              justifyContent: 'center',
              width: 35, 
              height: 35 }} 
          >
            <Icon name="angle-left" size={30} color='white' />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ 
              position: 'absolute',
              right: 5,
              top: 10,
              backgroundColor: Colors.pinkBackground, 
              borderWidth: 2,
              borderColor: Colors.blueBackground,
              borderRadius: 17.5, 
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 5,
              width: 35,
              height: 35 }} 
          >
            <Icon name="angle-right" size={30} color='white' />
          </TouchableOpacity>
          <View style={{height: 60, flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10}}>
            <Text style={[styles.contentText, {color: Colors.pinkBackground, fontSize: 20}]}>MeetUps</Text>
            <Text style={[styles.contentText, {color: Colors.blueBackground, fontSize: 20}]}>+ 6</Text>
          </View>
          <View style={{height: 60, flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 15}}>
            <Text style={[styles.contentText, {color: 'black', fontSize: 15}]}>Timers</Text>
          </View>
          <View style={{height: 60, flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10}}>
            <Text style={[styles.contentText, {color: 'black', fontSize: 20}]}>MeetUps</Text>
          </View>
        </View>

        <Text style={[styles.contentText, { color: Colors.blueBackground }]}>When</Text>

        <View style={{height: 30, flexDirection: 'row', justifyContent: 'center', margin: 10}}>
          <TouchableOpacity 
            style={{backgroundColor: Colors.pinkBackground, 
              width: 100, height: 30, borderColor: 'black', alignItems: 'center', justifyContent: 'center',
              borderWidth: 1, borderTopLeftRadius: 4, borderBottomLeftRadius: 4, borderRightWidth: 0
          }}>
            <Text style={[styles.contentText, {fontSize: 15}]}>Today</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{backgroundColor: Colors.pinkBackground, 
              width: 100, height: 30, borderColor: 'black', alignItems: 'center', justifyContent: 'center',
              borderWidth: 1, borderLeftColor: 'white', borderRightColor: 'white'
          }}>
            <Text style={[styles.contentText, {fontSize: 15}]}>This week</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{backgroundColor: Colors.pinkBackground, 
              width: 100, height: 30, borderColor: 'black', alignItems: 'center', justifyContent: 'center',
              borderWidth: 1, borderTopRightRadius: 4, borderBottomRightRadius: 4, borderLeftWidth: 0
          }}>
            <Text style={[styles.contentText, {fontSize: 15}]}>This month</Text>
          </TouchableOpacity>
        </View>

        <View style={{
          height: 130, 
          width: '95%',
          padding: 5,
          borderColor: Colors.pinkBackground,
          borderWidth: 3,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <View style={{width: 80}}>
            <Avatar size={60} />
            <Text style={[styles.contentText, { color: Colors.blueBackground, fontSize: 15 }]}>5 min ago</Text>
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 20,
            marginLeft: 20,
            justifyContent: 'space-between',
          }}>
            <Text style={[styles.contentText, { color: Colors.pinkBackground, fontSize: 10 }]}>Ceclia liked your comment</Text>
            <Image source={Images.igniteClear} style={{width: 80, height: 60}} />
          </View>
        </View>

        <TouchableOpacity style={{position: 'absolute', height: 60, width: '100%', bottom: 0,
        alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.blueBackground}}>
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 80,
            height: 40,
          }}>
            <View
              style={{
                backgroundColor: Colors.pinkBackground,
                width: 40,
                height: 40,
                borderRadius: 20,
                borderColor: 'black',
                borderTopWidth : 2,
                borderBottomWidth : 2,
                borderWidth : 1,
                transform: [
                  {scaleX: 2}
                ],
                position: 'absolute'
              }}
            />
            <Text style={[styles.contentText]}>Chat</Text>
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(NotificationScreen)
