// @flow

import React from 'react'
import {ScrollView, View} from 'react-native'
import PlaylistCarousel from '../../Components/PlaylistCarousel'
import AllSongs from '../../Components/AllSongs'
import FooterPlayer from "../../Components/FooterPlayer";

type Props = {
  screenProps: {
    changeLocale: () => void,
    t: (text: string) => string,
    darkTheme: boolean
  }
}

class MainScreen extends React.Component<Props> {
  render() {
    return <View>
      <FooterPlayer />
      <ScrollView>
        <PlaylistCarousel />
        <AllSongs />
      </ScrollView>
    </View>
  }
}

export default MainScreen