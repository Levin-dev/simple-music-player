// @flow

import React, {PureComponent} from 'react'
import {ScrollView, View} from 'react-native'
import DeviceEventManager from 'react-native-get-music-files'
import MusicFiles from 'react-native-get-music-files'
import PlaylistCarousel from '../Components/PlaylistCarousel'
import AllSongs from '../Components/AllSongs'
import MinifyPlayer from '../Components/MinifyPlayer'

type Props = {
  screenProps: {
    changeLocale: () => void,
    t: (text: string) => string,
    darkTheme: boolean
  }
}

class MainScreen extends PureComponent<Props> {
  componentDidMount() {
    MusicFiles.getAll({
      id : true,
      blured : false,
      artist : true,
      duration : true, //default : true
      cover : true, //default : true,
      title : true,
      cover : true,
      batchNumber : 5, //get 5 songs per batch
      minimumSongDuration : 10000, //in miliseconds,
      fields : ['title','artwork','duration','artist','genre','lyrics','albumTitle']
    }).then((tracks) => console.log(tracks))
      .catch((error) => console.log(error))
  }

  render() {
    const {navigation} = this.props
    return <>
      <MinifyPlayer navigation={navigation} />
      <ScrollView>
        <PlaylistCarousel />
        <AllSongs />
      </ScrollView>
    </>
  }
}

export default MainScreen