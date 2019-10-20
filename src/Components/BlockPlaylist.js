// @flow

import React from 'react'
import {View, ScrollView, Text, Image} from 'react-native'
import {Styles} from './Styles/BlockPlaylistStyle'

export default class BlockPlaylist extends React.PureComponent {
  renderBottomContainer = () => [
    <Text style={Styles.textName} key={0}>
      Home
    </Text>,
    <Text style={Styles.textCount} key={1}>
      38 songs
    </Text>
  ]

  render () {
    const isLast = this.props.el === 5
    return <View style={[Styles.container, isLast ? Styles.lastContainer : null]}>
      <View style={Styles.containerImage}>
        <Image
          source={{uri: 'https://i0.wp.com/sova.ponominalu.ru/wp-content/uploads/2017/10/e%60mglav.jpg?fit=1280%2C720&ssl=1'}}
          style={Styles.flex}
        />
      </View>
      {this.renderBottomContainer()}
    </View>
  }
}