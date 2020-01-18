import React from 'react'
import {Svg, Path} from 'react-native-svg'
import {Colors} from '../Themes/Theme'

export const Arrow = ({color = Colors.darkBlack, width = 30, height = 30, isInverse}: Object) => (
  <Svg
    width={width}
    height={height}
    viewBox='0 0 32 32'
    style={isInverse && {transform: [{rotateX: '180deg'}]}}
  >
    <Path
      d='M16.714,11.297c-0.389-0.389-1.039-0.389-1.429,0l-8.999,8.976  c-0.394,0.394-0.394,1.033,0,1.426c0.394,0.394,1.034,0.394,1.428,0L16,13.436l8.285,8.264c0.395,0.394,1.034,0.394,1.429,0  c0.394-0.394,0.394-1.033,0-1.426L16.714,11.297z'
      fill={color}
    />
  </Svg>
)