import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Avatar from './Avatar'

// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/LiveCommentStyle'
import { Colors, Images } from '../Themes'

export default class LiveComment extends Component {
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
          width: 300, 
          height: 120, 
          borderWidth: 2,
          borderRadius: 5,
          flexDirection: 'row',
          padding: 10,
          backgroundColor: Colors.pinkBackground,
          borderColor: 'black'}, this.props.style]}>
        <View>
          <View style={{ flexDirection: 'row'}}>
            <Icon name="thumbs-up" size={20} color="blue" />
            <TouchableOpacity style={{ padding: 10, alignItems: 'center' }}>
              <Avatar size={30} borderColor={Colors.blueHeader} />
              <Text style={[styles.contentText, {fontSize : 15, borderBottomWidth: 2, borderColor: Colors.blueHeader}]}>username</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{ padding: 10, alignItems: 'center', flexDirection: 'row' }}>
            <Icon name="map-pin" size={30} color="blue" />
            <Text style={[styles.contentText, {fontSize : 15, marginLeft: 10}]}>location</Text>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', height: 20}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={[styles.contentText, {fontSize : 15}]}>Live</Text>
              <Icon name="check" 
                size={20} 
                color='white' 
                style={{ margin : 15, borderColor: Colors.blueHeader, borderWidth: 3, borderRadius: 20 }} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="thumbs-up" size={20} color="blue"/>
              <Text style={[styles.contentText, {fontSize : 15}]}>5 min</Text>
            </View>
          </View>
          <Text style={[styles.contentText, {fontSize : 15}]}>Live comments</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 170}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.contentText, {fontSize : 15}]}>75</Text>
              <Icon name="thumbs-up" size={20} color="blue"/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.contentText, {fontSize : 15}]}>75</Text>
              <Icon name="thumbs-up" size={20} color="blue"/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.contentText, {fontSize : 15}]}>75</Text>
              <Icon name="thumbs-up" size={20} color="blue"/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.contentText, {fontSize : 15}]}>75</Text>
              <Icon name="thumbs-up" size={20} color="blue"/>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
