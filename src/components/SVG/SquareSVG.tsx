import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SquareSVG({ props, color = 'red', size=100 }: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 440 420"
      fill="none"
      {...props}
    >
      <Circle cx={19.5} cy={19.5} r={19.5} fill={color} />
      <Circle cx={418.5} cy={19.5} r={19.5} fill={color} />
      <Circle cx={19.5} cy={397.5} r={19.5} fill={color} />
      <Circle cx={418.5} cy={397.5} r={19.5} fill={color} />
      <Path
        stroke={color}
        strokeOpacity={0.5}
        strokeWidth={10}
        d="M17 17H423V393H17z"
      />
    </Svg>
  )
}

export default SquareSVG
