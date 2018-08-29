import React, { Component } from 'react'
import { ScrollView, Text, ImageBackground } from 'react-native'
import { connect } from 'react-redux'


import LiveComment from '../Components/LiveComment'
import PhotoVideoButton from '../Components/PhotoVideoButton'
import CircleRegion from '../Components/CircleRegion'
import MapComment from '../Components/MapComment'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MapScreenStyle'
import { Colors, Images } from '../Themes'

class MapScreen extends Component {
  render () {
    return (
      <ImageBackground source={Images.mapImage} style={{ width: '100%', height: '100%'}}>
        <LiveComment style={{position: 'absolute', left: 0, top: 10}} />
        <PhotoVideoButton style={{position: 'absolute', left: 310, top: 20}} size={100} />
        <CircleRegion style={{position: 'absolute', left: 10, top: 320}} size={200} />
        <MapComment style={{position: 'absolute', left: 300, top: 140}} />
      </ImageBackground>
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

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)
