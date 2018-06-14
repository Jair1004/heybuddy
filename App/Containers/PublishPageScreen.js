import React, { Component } from 'react'
import { Dimensions, ScrollView, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Avatar from "../Components/Avatar"
import Icon from "react-native-vector-icons/FontAwesome";

// Styles
import styles from './Styles/PublishPageScreenStyle'
import { Colors, Images } from "../Themes";

class PublishPageScreen extends Component {
  render () {
    const { width } = Dimensions.get("screen")
    
    return (
      <View style={{ backgroundColor : 'white', flex: 1 }}>
        <ScrollView style={{ padding: 10, marginBottom: 60 }}>
          <View style={{
            height: 30,
            borderRadius: 6,
            borderColor: 'black',
            borderWidth: 2,
            backgroundColor: Colors.pinkBackground,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
            <TextInput placeholder="Search" style={styles.contentText} editable />
            <Icon size={20} name="search" color="white" />
          </View>

          <View style={{
            height: 150,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <View style={{
              borderWidth: 5,
              borderRadius: 10,
              borderColor: Colors.pinkBackground,
              left: 20,
              top: 20,
              height: 130,
              width: width - 40,
              position: 'absolute'
            }}/>
            <Icon size={40} name="bitcoin" color="red" style={{position: 'absolute', left: 0, top: 0}}/>
            <Icon size={100} name="bitcoin" color="red"/>
          </View>

          <View style={{
            width: 100,
            height: 30,
            borderWidth: 2,
            borderColor: 'black',
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            margin: 10,
            alignSelf: 'center'
          }}>
            <Text style={[styles.contentText, {color: 'black', fontSize: 15}]}>Title</Text>
          </View>

          <View style={{
            height: 150,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <View style={{
              borderWidth: 5,
              borderRadius: 10,
              borderColor: Colors.pinkBackground,
              left: 20,
              top: 20,
              height: 130,
              width: width - 40,
              position: 'absolute'
            }}/>
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
            <Text style={[styles.contentText, {color: Colors.pinkBackground}]}>Add a new Messsage</Text>
          </View>

          <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>
            <TouchableOpacity style={{
              backgroundColor: Colors.blueBackground,
              borderRadius: 8,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
              <Text style={[styles.contentText, {fontSize: 30}]}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              backgroundColor: Colors.blueBackground,
              borderRadius: 8,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              marginLeft: 10,
            }}>
              <Text style={[styles.contentText, {fontSize: 30}]}>Delete</Text>
            </TouchableOpacity>
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
            backgroundColor: Colors.blueHeader 
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

export default connect(mapStateToProps, mapDispatchToProps)(PublishPageScreen)
