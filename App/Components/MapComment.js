import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

// import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
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
        <Icon name={"bell"} size={20} />
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
              <Icon name={"thumbs-up"} size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name={"thumbs-up"} size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name={"thumbs-up"} size={25} />
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
              <Icon name={"thumbs-up"} size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name={"thumbs-up"} size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name={"thumbs-up"} size={25} />
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
              <Icon name={"thumbs-up"} size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name={"thumbs-up"} size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name={"thumbs-up"} size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
