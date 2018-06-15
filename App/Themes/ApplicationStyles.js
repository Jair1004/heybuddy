import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    titleText: {
      ...Fonts.style.h3,
      color: 'white',
    },
    contentText: {
    	...Fonts.style.h4,
      color: 'white',
      textAlign: 'center'
    }
  }
}

export default ApplicationStyles
