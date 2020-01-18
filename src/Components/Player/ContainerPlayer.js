// @flow

import React from 'react'
import {View, Animated} from 'react-native'
import {Styles} from './Styles/ContainerPlayerStyle'

type Props = {
}

export default class ContainerPlayer extends React.Component<Props> {

  render() {
    return <View style={Styles.container}>
      <View style={Styles.imageContainer}>
        <View style={Styles.imageBorder} />
        <Animated.Image
          source={{uri: this.props.image}}
          style={Styles.image}
        />
      </View>
    </View>
  }
}