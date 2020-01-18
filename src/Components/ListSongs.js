// @flow

import React, {PureComponent} from 'react'
import {FlatList} from 'react-native'
import RowSong from './RowSong'

type Props = {
}

class ListSongs extends PureComponent<Props> {
  renderSong = (el, index) => <RowSong key={index} el={el} />

  render() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return data.map(this.renderSong)
  }
}

export default ListSongs