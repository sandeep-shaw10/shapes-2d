import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function CircleSVG({ props, color = 'red', size=100 }: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 416 396"
      fill="none"
      {...props}
    >
      <Circle
        cx={216}
        cy={198}
        r={195.5}
        stroke={color}
        strokeOpacity={0.5}
        strokeWidth={10}
      />
      <Circle cx={19.5} cy={198.5} r={19.5} fill={color} />
    </Svg>
  )
}

export default CircleSVG
