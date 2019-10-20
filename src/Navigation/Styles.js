// @flow

import {StyleSheet} from 'react-native'
import {Colors, Fonts} from '../Themes/Theme'

export const Styles = StyleSheet.create({
  header: {
    height: 70,
    backgroundColor: Colors.aqua,
    elevation: 1
  },
  title: {
    fontSize: 30,
    flex: 1,
    textAlign: 'center',
    paddingTop: 30,
    fontFamily: Fonts.bold,
    color: Colors.black
  }
})