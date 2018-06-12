import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import Avatar from '../Components/Avatar.js'
import FullButton from '../Components/FullButton.js'
import ProgressCircle from 'react-native-progress-circle'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/WillYouHelpScreenStyle'
import navStyles from '../Navigation/Styles/NavigationStyles.js'
import colors from '../Themes/Colors.js'
import images from '../Themes/Images.js'

class WillYouHelpScreen extends Component {
  static navigationOptions = {
    headerRight:(<View
                    style={{ flexDirection : 'row' }}
                  >
                  <TouchableOpacity>
                    <Icon name="search" size={30} color='white' style={{ marginRight : 15 }} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon name="ellipsis-h" size={30} color='white' style={{ marginRight : 10 }} />
                  </TouchableOpacity>
                </View>),
    headerTitleStyle: styles.titleText
  }

  render () {
    return (
      <View style={{ backgroundColor : colors.orangeBackground, flex: 1 }}>
        <ScrollView style={{ padding: 20, marginBottom: 60 }}>
          <View style={{ flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center', padding : 10 }}>
            <Image style={{ width: 130, height: 35 }} ResizeMode='contain' source={images.buddyLogo} />
            <Avatar size={130} />
            <Image style={{ width: 100, height: 100 }} source={images.clearLogo} />
          </View>

          <View style={{ flexDirection: 'row', justifyContent : 'center', alignItems: 'center' }}>
            <Text style={styles.contentText}>Will you help?</Text>
            <Image style={{ width: 130, height: 35 }} ResizeMode='contain' source={images.buddyLogo} />
          </View>

          <View style={{ flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center', padding : 10 }}>
            <Image style={{ width: 130, height: 35 }} ResizeMode='contain' source={images.buddyLogo} />
            <Avatar size={130} />
            <Image style={{ width: 100, height: 100 }} source={images.clearLogo} />
          </View>

          <View style={{width: '100%', alignItems: 'center', justifyContent: 'center', padding: 20}}>
            <ProgressCircle
              percent={20}
              radius={100}
              borderWidth={20}
              color='#999'
              shadowColor='#FF9E92'
              bgColor={colors.orangeBackground}
            >
              <Text style={styles.contentText}>00:00:00</Text>
            </ProgressCircle>
          </View>
        </ScrollView>

        <View style={{ position : 'absolute', bottom : 0 , flexDirection : 'row'}}>
          <FullButton
            text='Yes'
            styles={{ backgroundColor: colors.orangeHeader, flex: 1 }}
          />
          <View style={{ width: 2, backgroundColor : 'white' }} />
          <FullButton
            text='No'
            styles={{ backgroundColor: colors.orangeHeader, flex : 1 }}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(WillYouHelpScreen)
