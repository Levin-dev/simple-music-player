// @flow

import React from 'react'
import {ScrollView, View, Image, Text} from 'react-native'
import {Styles} from './Styles/FooterPlayerStyle'
import RadialGradient from 'react-native-radial-gradient'
import LinearGradient from 'react-native-linear-gradient'
import {Colors} from '../Themes/Theme'
import {Next} from '../Icons/Next'
import {Play} from '../Icons/Play'

type Props = {
}

export default class FooterPlayer extends React.Component<Props> {
  render() {
    return <View style={Styles.container}>
      <LinearGradient
        colors={['transparent', 'black']}
        style={Styles.shadow}
      />
      <Image
        style={Styles.image}
        source={{uri: 'https://www.abc.net.au/news/image/9667872-3x2-700x467.jpg'}}
      />
      <View style={Styles.mainContainer}>
        <View style={Styles.leftColumn}>
          <View style={Styles.backgroundImageContainer}>
            <RadialGradient
              style={Styles.radialGradient}
              colors={['rgba(255,255,255,0.5)', Colors.white]}
              stops={[0.3, 1]}
            />
            <Image
              source={{uri: 'https://www.abc.net.au/news/image/9667872-3x2-700x467.jpg'}}
              style={Styles.backgroundImage}
              blurRadius={1}
            />
          </View>
        </View>
        <View style={Styles.rightColumn}>
          <View style={Styles.infoContainer}>
            <Text numberOfLines={1} style={Styles.textName}>Greenlight</Text>
            <Text numberOfLines={1} style={Styles.textDescription}>Lorde</Text>
          </View>
          <View style={Styles.playerContainer}>
            <Next style={{transform: [{rotateY: '180deg'}]}} />
            <Play />
            <Next />
          </View>
        </View>
      </View>
    </View>
  }
}