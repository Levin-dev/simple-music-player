import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import MainScreen from '../Containers/Main'

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainScreen,
    title: 'Музыка'
  }
})

export default createAppContainer(AppNavigator)