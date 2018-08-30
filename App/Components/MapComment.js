import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

// import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import styles from './Styles/MapCommentStyle'
import { Colors, Images } from '../Themes'
export default class MapComment extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View 
        style={[{
          alignItems: 'center'
        }, this.props.style]}>
        <Image source={Images.speakerWithThreeSoundWaves} style={{width: 30, height: 30}} />
        <TextInput style={[styles.contentText, {fontSize : 10, width: 70, height: 20, marginBottom: 5}]}/>
        <TextInput style={[styles.contentText, {
          fontSize : 10, 
          width: 60, 
          height: 30, 
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 3,
          marginBottom: 5,
          backgroundColor: Colors.pinkBackground}]}/>
        <View style={{
          alignItems: 'center',
          borderColor: 'purple',
          borderWidth: 2,
          borderBottomWidth: 0,
        }}>
          <View style={{
            alignItems: 'center',
            borderColor: 'purple',
            borderBottomWidth: 2,
            width: 50,
            height: 110,
            justifyContent: 'space-between'
            }}>
            <TouchableOpacity>
              <Image source={Images.faceWithPartyHornAndPartyHat} style={{width: 30, height: 30}} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Images.clinkingBeerMugs} style={{width: 30, height: 30}} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Images.bottleWithPopping} style={{width: 30, height: 30}} />
            </TouchableOpacity>
          </View>
          <View style={{
            alignItems: 'center',
            borderColor: 'purple',
            borderBottomWidth: 2,
            width: 50,
            height: 110,
            justifyContent: 'space-between'
            }}>
            <TouchableOpacity>
              <Image source={Images.partyPopper} style={{width: 30, height: 30}} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Images.crystalBall} style={{width: 30, height: 30}} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Images.speakerWithOneSoundWave} style={{width: 30, height: 30}} />
            </TouchableOpacity>
          </View>
          <View style={{
            alignItems: 'center',
            borderColor: 'purple',
            borderBottomWidth: 2,
            width: 50,
            height: 110,
            justifyContent: 'space-between'
            }}>
            <TouchableOpacity>
              <Image source={Images.dancerEmojiModifierFitzpatrickType} style={{width: 30, height: 30}} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Images.dancer} style={{width: 30, height: 30}} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Images.partyPopper} style={{width: 30, height: 30}} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
