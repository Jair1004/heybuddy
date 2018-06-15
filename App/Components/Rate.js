import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import styles from './Styles/RateStyle'

export default class Rate extends Component {
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
      <View style={[{ flexDirection: 'row' }, this.props.style]}>
        <Icon name="star" size={50} color="yellow" style={{margin: 5}} />
        <Icon name="star" size={50} color="yellow" style={{margin: 5}} />
        <Icon name="star" size={50} color="yellow" style={{margin: 5}} />
        <Icon name="star" size={50} color="yellow" style={{margin: 5}} />
        <Icon name="star" size={50} color="yellow" style={{margin: 5}} />
      </View>
    )
  }
}
