// @flow

import {StyleSheet, Dimensions} from 'react-native'

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  imageContainer: {
    borderRadius: Dimensions.get('window').width / 2,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    aspectRatio: 1
  },
  imageBorder: {
    // position: 'absolute',
    // width: '100%',
    // height: '100%',
    // zIndex: 1,
    // borderWidth: 30,
    // borderRadius: Dimensions.get('window').width / 2
  },
  palka: {
    height: '100%',
    width: 10,
    backgroundColor: 'black',
    borderRadius: 5,
    position: 'absolute',
    zIndex: 2,
    left: 0,
    bottom: 50,
    marginLeft: 64

  }
})