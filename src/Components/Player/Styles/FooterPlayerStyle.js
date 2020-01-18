// @flow

import {StyleSheet} from 'react-native'
import {Colors, Fonts} from '../../../Themes/Theme'

export const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '30%',
    paddingHorizontal: 16,
    bottom: 0,
    justifyContent: 'flex-end'
  },
  footer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    bottom: 0,
    width: '100%',
    height: '50%',
    alignItems: 'center'
  },
  infoContainer: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textName: {
    fontFamily: Fonts.medium,
    color: Colors.black,
    fontSize: 18
  },
  textDescription: {
    fontFamily: Fonts.base,
    color: Colors.darkBlue,
    fontSize: 16
  }
})