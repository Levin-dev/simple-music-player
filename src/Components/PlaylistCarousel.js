// @flow

import React from 'react'
import {View, ScrollView} from 'react-native'
import {Styles} from './Styles/PlaylistCarouselStyle'
import BlockPlaylist from './BlockPlaylist'
import Title from './Title'
import I18n from '../i18n'

export default class PlaylistCarousel extends React.PureComponent {
  renderBlockPlaylist = (el, index) =>
    <BlockPlaylist key={index} el={el} />

  render () {
    const playlists = [1, 2, 3, 4, 5]
    return ([
      <Title key={0} title='Playlists' />,
      <ScrollView
        key={1}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={Styles.container}
      >
        {playlists.map(this.renderBlockPlaylist)}
      </ScrollView>
    ])
  }
}