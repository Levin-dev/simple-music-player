// @flow

import React, {PureComponent} from 'react'
import {View} from 'react-native'
import {Styles} from './Styles/AllSongsStyle'
import Title from './Title'
import ListSongs from './ListSongs'

type Props = {
}

class AllSongs extends PureComponent<Props> {
  render() {
    return <View style={Styles.container}>
      <Title style={Styles.title} title='All songs' />
      <ListSongs />
    </View>
  }
}

export default AllSongs