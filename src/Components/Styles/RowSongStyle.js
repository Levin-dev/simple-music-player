// @flow

import {StyleSheet} from 'react-native'
import {Colors, Fonts} from '../../Themes/Theme'

export const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    flexDirection: 'row',
    height: 50
  },
  textName: {
    fontFamily: Fonts.medium,
    color: Colors.black,
    fontSize: 16
  },
  textDescription: {
    fontFamily: Fonts.base,
    color: Colors.darkBlue
  },
  selectedContainer: {
    backgroundColor: Colors.aqua
  },
  leftColumn: {
    paddingVertical: 10,
    width: '70%',
    justifyContent: 'center'
  },
  rightColumn: {
    width: '30%',
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center'
  },
  imageBackground: {
    height: '210%',
    aspectRatio: 1,
    resizeMode: 'cover'
  },
  radialGradient: {
    position: 'absolute',
    height: '210%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.4)'
  },
  image: {
    height: '130%',
    aspectRatio: 1,
    resizeMode: 'cover',
    position: 'absolute',
    borderRadius: 49
  }
})