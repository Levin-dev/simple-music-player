// @flow

import React, {PureComponent} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import {Styles} from './Styles/RowSongStyle'
import RadialGradient from 'react-native-radial-gradient'
import {Colors} from '../Themes/Theme'

type Props = {
}

class RowSong extends PureComponent<Props> {

  render() {
    const selected = this.props.el === 2
    return <TouchableOpacity
      style={[Styles.container, selected ? Styles.selectedContainer : null]}
    >
      <View style={Styles.leftColumn}>
        <Text style={Styles.textName}>Greenlight</Text>
        <Text style={Styles.textDescription}>Lorde</Text>
      </View>
      {selected
        ? <View style={Styles.rightColumn}>
          <Image
            style={Styles.imageBackground}
            source={{uri: 'https://www.abc.net.au/news/image/9667872-3x2-700x467.jpg'}}
            blurRadius={1}
          />
          <RadialGradient
            style={Styles.radialGradient}
            colors={['rgba(255,255,255,0.1)', Colors.aqua]}
            stops={[0.3, 1]}
          />
          <Image
            style={Styles.image}
            source={{uri: 'https://www.abc.net.au/news/image/9667872-3x2-700x467.jpg'}}
          />
        </View>
        : null
      }
    </TouchableOpacity>
  }
}

export default RowSong