// import realm from './realm'
import store from 'react-native-simple-store'
import uuid from 'uuid'
var moment = require('moment')

let Utils = {
  navigatorStyle () {
    return {
      navBarTextFontFamily: 'BrandonGrotesque-Medium',
      navBarTextFontSize: 20,
      navBarHidden: false
    // navBarButtonColor: '#D8D8D8',
    }
  },
  navigatorButtons () {
    return {
      leftButtons: [
        {
          icon: require('./assets/images/drawer-icon.png'),
          id: 'drawer',
          disableIconTint: true
        }
      ]
    }
  },
  
}

module.exports = Utils
