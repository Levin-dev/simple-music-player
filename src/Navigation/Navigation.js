// @flow

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {fromBottom} from 'react-navigation-transitions'
import MainScreen from '../Containers/MainScreen'
import PlayerScreen from '../Containers/PlayerScreen'
import {Styles} from './Styles'

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      title: 'Music',
      headerStyle: Styles.header,
      headerTitleStyle: Styles.title
    }
  },
  Player: {
    screen: PlayerScreen,
    navigationOptions: {
      header: null,
      gesturesEnabled: true
    }
  }
}, {
  transitionConfig: () => fromBottom(400)
})

export default createAppContainer(AppNavigator)