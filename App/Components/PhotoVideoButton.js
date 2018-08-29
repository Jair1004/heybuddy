import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/PhotoVideoButtonStyle'
import { Colors, Images } from '../Themes'

export default class PhotoVideoButton extends Component {
  // Prop type warnings
  static propTypes = {
    size: PropTypes.number
  }
  
  // Defaults for props
  static defaultProps = {
    size: 130
  }

  render () {
    return (
      <TouchableOpacity 
        style={[{
          borderColor: Colors.blueHeader, 
          borderRadius: this.props.size / 2, 
          width: this.props.size, 
          height: this.props.size, 
          borderWidth: 5,
          backgroundColor: 'white',
          alignItems: 'center',
          paddingTop: 20,
          paddingBottom: 20,
          justifyContent: 'space-between'}, this.props.style]}>
        <Text style={[styles.contentText, {fontSize : 15, color: Colors.blueHeader}]}>Photo/Video</Text>
        <Text style={[styles.contentText, {fontSize : 18, color: Colors.pinkBackground}]}>5 min</Text>
      </TouchableOpacity>
    )
  }
}
