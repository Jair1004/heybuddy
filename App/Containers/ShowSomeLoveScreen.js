import React, { Component } from 'react'
import { ScrollView, Text, View, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Icon from 'react-native-vector-icons/FontAwesome'
import Avatar from '../Components/Avatar.js'

// Styles
import styles from './Styles/ShowSomeLoveScreenStyle'
import { Colors, Images } from '../Themes'

class ShowSomeLoveScreen extends Component {
  render () {
    return (
      <View style={{ backgroundColor : 'white', flex: 1 }}>
        <ScrollView style={{ paddingVertical: 20, marginBottom: 60 }}>
          <View style={{ alignItems: 'center', width: '100%', padding: 20, borderBottomWidth: 3, borderColor: Colors.blueBackground }}>
            <Avatar size={150} />
            <Text style={[styles.contentText, { marginBottom: 10, color: Colors.blueBackground }]}>Rachel Banks</Text>
            <TouchableOpacity 
              style={{ 
                width: 160, 
                height: 46, 
                borderRadius: 23, 
                backgroundColor: Colors.blueBackground, 
                flexDirection: 'row', 
                alignItems: 'center',
                justifyContent : 'space-around'
            }}>
              <Text style={styles.contentText}>Like us</Text>
              <Icon name="heart" size={30} color='red' style={{ margin : 5 }} />
            </TouchableOpacity>
          </View>

          <View style={{ padding: 10, justifyContent: 'space-between', alignContent: 'center', flexDirection: 'row' }}>
            <TouchableOpacity>
              <Image source={Images.facebook} style={{width: 100, height: 100}} ResizeMode='contain' />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Images.instagram} style={{width: 100, height: 100}} ResizeMode='contain' />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Images.twitter} style={{width: 100, height: 100}} ResizeMode='contain' />
            </TouchableOpacity>
          </View>

          <View style={{ padding: 10, justifyContent: 'space-between', alignContent: 'center', flexDirection: 'row' }}>
            <TouchableOpacity>
              <Image source={Images.pinterest} style={{width: 100, height: 100}} ResizeMode='contain' />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Images.youtube} style={{width: 100, height: 100}} ResizeMode='contain' />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Images.snapchat} style={{width: 100, height: 100}} ResizeMode='contain' />
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowSomeLoveScreen)
