// @flow

import React from 'react'
import AppNavigator from './Navigation/Navigation'

export var darkTheme = false

export default class App extends React.Component {
  changeTheme = () => darkTheme = !darkTheme

  render() {
    return <AppNavigator
      screenProps={{
        changeTheme: this.changeTheme,
        darkTheme
      }}
    />
  }
}