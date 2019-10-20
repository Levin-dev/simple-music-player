// @flow

import {StyleSheet} from 'react-native'
import {Colors, Fonts} from '../../Themes/Theme'

export const Styles = StyleSheet.create({
  container: {
    marginRight: 20
  },
  containerImage: {
    backgroundColor: 'white',
    height: 100,
    aspectRatio: 1,
    elevation: 15,
    overflow: 'hidden',
    borderRadius: 15
  },
  flex: {
    flex: 1
  },
  textName: {
    textAlign: 'center',
    fontFamily: Fonts.bold,
    color: Colors.black,
    marginTop: 5,
    fontSize: 16
  },
  textCount: {
    textAlign: 'center',
    fontFamily: Fonts.semiBold,
    color: Colors.lightBlue
  },
  lastContainer: {
    marginRight: 0
  }
})