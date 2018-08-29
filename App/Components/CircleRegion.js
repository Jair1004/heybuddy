import React, { Component } from 'react'
import Avatar from '../Components/Avatar'


import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/CircleRegionStyle'


import { Colors, Images } from '../Themes'

export default class CircleRegion extends Component {
  // Prop type warnings
  static propTypes = {
    size: PropTypes.number,
  }
  
  // Defaults for props
  static defaultProps = {
    size: 100
  }

  render () {
    return (
      <View 
        style={[{ 
          width: this.props.size, 
          height: this.props.size,
          borderRadius: this.props.size / 2, 
          backgroundColor: 'purple', 
          opacity: 0.5}, this.props.style]}>
        <Avatar size={30} style={{position: 'absolute', left: 20, top: 40}} />
        <Avatar size={30} style={{position: 'absolute', left: 60, top: 70}} />
      </View>
    )
  }
}
