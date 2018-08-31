import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Avatar from './Avatar'

// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native'
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
          height: 130, 
          borderWidth: 2,
          borderRadius: 5,
          flexDirection: 'row',
          padding: 10,
          backgroundColor: Colors.pinkBackground,
          borderColor: 'black'}, this.props.style]}>
        <View>
          <View style={{ flexDirection: 'row'}}>
            <Image source={Images.thumbsUpSign} style={{width: 20, height: 20}} />
            <TouchableOpacity style={{ padding: 10, alignItems: 'center' }}>
              <Avatar size={30} borderColor={Colors.blueHeader} />
              <Text style={[styles.contentText, {fontSize : 15, borderBottomWidth: 2, borderColor: Colors.blueHeader}]}>username</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{ padding: 10, alignItems: 'center', flexDirection: 'row' }}>
            <Image source={Images.pushpin} style={{width: 20, height: 20}} />
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
                style={{ margin : 10, borderColor: Colors.blueHeader, borderWidth: 3, borderRadius: 20, paddingLeft: 5, paddingTop: 5 }} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image source={Images.blue_white_clock} style={{width: 20, height: 20}} />
              <Text style={[styles.contentText, {fontSize : 15, color: Colors.orangeHeader}]}>5 min</Text>
            </View>
          </View>
          <Text style={[styles.contentText, {fontSize : 15, borderLeftWidth: 2, borderColor: Colors.blueHeader}]}>Live comments</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 170}}>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={[styles.contentText, {fontSize : 15}]}>75</Text>
              <Image source={Images.airplane} style={{width: 20, height: 20}} />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={[styles.contentText, {fontSize : 15}]}>75</Text>
              <Image source={Images.thumbsUpSign} style={{width: 20, height: 20}} />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={[styles.contentText, {fontSize : 15}]}>75</Text>
              <Image source={Images.White_eyeball} style={{width: 25, height: 16}} />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={[styles.contentText, {fontSize : 15}]}>75</Text>
              <Image source={Images.BluecommentBubble} style={{width: 25, height: 16}} />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
