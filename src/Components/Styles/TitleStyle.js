// @flow

import {StyleSheet} from 'react-native'
import {Colors, Fonts} from '../../Themes/Theme'

export const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    paddingTop: 30,
    flexDirection: 'row'
  },
  title: {
    fontFamily: Fonts.semiBold,
    fontSize: 24,
    color: Colors.darkBlue,
    width: '85%',
    textAlignVertical: 'center'
  },
  arrow: {
    fontFamily: Fonts.semiBold,
    textAlign: 'right',
    textAlignVertical: 'center',
    width: '15%',
    fontSize: 30,
    color: Colors.darkBlue
  }
})