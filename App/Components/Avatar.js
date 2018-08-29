import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'
import styles from './Styles/AvatarStyle'

import images from '../Themes/Images'
import colors from '../Themes/Colors.js'

export default class Avatar extends Component {
  // Prop type warnings
  static propTypes = {
    avatarImage: PropTypes.object,
    size: PropTypes.number.require,
    borderColor: PropTypes.color
  }
  
  // Defaults for props
  static defaultProps = {
    avatarImage: images.defaultAvatar,
    borderColor: colors.pinkBackground
  }

  render () {
    let { avatarImage, size, borderColor } = this.props

    return (
      <Image 
        source={avatarImage} 
        style={[{
          width : size, 
          height: size, 
          backgroundColor : 'transparent',
          borderRadius : size / 2, 
          borderWidth : 3, 
          borderColor },
          this.props.style
          ]}
      />
    )
  }
}
