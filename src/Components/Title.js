// @flow

import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import type {ViewStyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet'
import {Styles} from './Styles/TitleStyle'

type Props = {
  title: string,
  style?: ViewStyleProp
}

export default class Title extends React.PureComponent<Props> {
  render () {
    const {title, style} = this.props
    return (
      <TouchableOpacity style={[Styles.container, style]}>
        <Text style={Styles.title}>
          {title}
        </Text>
        <Text style={Styles.arrow}>
          {'>'}
        </Text>
      </TouchableOpacity>
    )
  }
}