// @flow

import React from 'react'
import {withNavigation} from 'react-navigation'
import {TouchableOpacity, View, Image, Text} from 'react-native'
import {Styles} from './Styles/HeaderPlayerStyle'
import {Arrow} from '../../Icons/Arrow'
import {Constants} from '../../Config/Constants'

type Props = {
}

class HeaderPlayer extends React.Component<Props> {
  handleGoBack = () => {
    this.props.navigation.goBack()
  }
  render() {
    return <TouchableOpacity
      onPress={this.handleGoBack}
      style={Styles.arrow}
      hitSlop={Constants.defaultHitSlop}
    >
      <Arrow isInverse />
    </TouchableOpacity>
  }
}

export default withNavigation(HeaderPlayer)