// @flow

import {StyleSheet} from 'react-native'
import {Colors, Fonts} from '../../Themes/Theme'

export const Styles = StyleSheet.create({
  container: {
    height: 160,
    paddingTop: 20,
    backgroundColor: 'transparent',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    zIndex: 1
  },
  mainContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.white,
    position: 'absolute',
    flexDirection: 'row',
    overflow: 'hidden',
    zIndex: 1
  },
  image: {
    height: 140,
    aspectRatio: 1,
    marginLeft: 14,
    borderRadius: 70,
    marginTop: -20,
    zIndex: 2,
    position: 'absolute'
  },
  radialGradient: {
    position: 'absolute',
    height: 250,
    marginTop: -80,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    borderRadius: 125
  },
  backgroundImage: {
    height: 250,
    marginTop: -80,
    aspectRatio: 1,
    borderRadius: 125
  },
  leftColumn: {
    width: '50%',
    alignItems: 'center'
  },
  backgroundImageContainer: {
    overflow: 'hidden'
  },
  rightColumn: {
    width: '50%',
    alignItems: 'center',
    paddingRight: 14
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
  },
  infoContainer: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  playerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%'
  },
  shadow: {
    marginTop: -30,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '100%',
    height: '100%'
  }
})