// @flow

import React, {PureComponent} from 'react'
import {View, Text} from 'react-native'
import {Styles} from './Styles/FooterPlayerStyle'
import {Play} from '../../Icons/Play'
import {Next} from '../../Icons/Next'
import {Colors} from '../../Themes/Theme'
import Slider from '@react-native-community/slider'

type Props = {
}

const sizeMusic = 205000

export default class FooterPlayer extends PureComponent<Props> {
  render() {
    return <View style={Styles.container}>
      <View style={Styles.infoContainer}>
        <Text numberOfLines={1} style={Styles.textName}>Greenlight</Text>
        <Text numberOfLines={1} style={Styles.textDescription}>Lorde</Text>
      </View>
      <Slider
        maximumValue={sizeMusic}
        minimumTrackTintColor={Colors.darkBlack}
        thumbTintColor={Colors.darkBlue}
        value={0}
      />
      <View style={Styles.footer}>
        <Next color={Colors.darkBlue} isInverse />
        <Play color={Colors.darkBlue} />
        <Next color={Colors.darkBlue} />
      </View>
    </View>
  }
}