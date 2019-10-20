import React from 'react'
import {Svg, G, Path} from 'react-native-svg'
import {Colors} from "../Themes/Theme";

export const Next = ({color = Colors.darkBlack, width = 30, height = 30, style}) => (
  <Svg fill={color} x='0px' y='0px' width={width} height={height} viewBox='0 0 253.296 253.296' style={style}>
    <G>
      <Path d='M26.75,62.119C11.985,53.645,0,60.585,0,77.625v98.061c0,17.025,11.985,23.959,26.75,15.493l85.784-49.183
        c14.773-8.471,14.773-22.214,0-30.683L26.75,62.119z' />
      <Path d='M156.437,191.178l85.775-49.183c14.778-8.471,14.778-22.214,0-30.683l-85.775-49.189
        c-14.773-8.474-26.756-1.533-26.756,15.506v98.061C129.681,192.71,141.663,199.65,156.437,191.178z' />
    </G>
  </Svg>
)