// @flow

import React from 'react'
import {View, Modal, Text} from 'react-native'

type Props = {
  type: string
}

export default class MainScreen extends React.Component<Props> {
  render() {
    return <View>
      <Text>
        {this.props.text}
      </Text>
    </View>
  }
}