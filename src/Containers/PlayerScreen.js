// @flow

import React, {PureComponent} from 'react'
import FooterPlayer from '../Components/Player/FooterPlayer'
import HeaderPlayer from '../Components/Player/HeaderPlayer'
import ContainerPlayer from '../Components/Player/ContainerPlayer'
import {ImageBackground, View} from 'react-native'
import {Styles} from './Styles/PlayerScreenStyle'

type Props = {
}

const image = 'https://www.abc.net.au/news/image/9667872-3x2-700x467.jpg'

class PlayerScreen extends PureComponent<Props> {
  render() {
    return <View style={Styles.container}>
      <ImageBackground
        source={{uri: image}}
        style={Styles.backgroundImage}
        resizeMode='cover'
        blurRadius={1}
      />
      <View style={Styles.backgroundGradient}>
        <HeaderPlayer />
        <ContainerPlayer image={image} />
        <FooterPlayer />
      </View>
    </View>
  }
}

export default PlayerScreen