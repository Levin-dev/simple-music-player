// @flow

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import MainScreen from '../Containers/Main'
import {Styles} from './Styles'

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      title: 'Music',
      headerStyle: Styles.header,
      headerTitleStyle: Styles.title
    }
  }
})

export default createAppContainer(AppNavigator)