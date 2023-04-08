import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function ParallelogramSVG({ props, color = 'red', size=100 }: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 431 210"
      fill="none"
      {...props}
    >
      <Path
        d="M416.5 14h-318L13 196h323.5l80-182z"
        stroke={color}
        strokeWidth={10}
        strokeOpacity={0.5}
      />
      <Circle cx={98.5} cy={14.5} r={14.5} fill={color} />
      <Circle cx={416.5} cy={14.5} r={14.5} fill={color} />
      <Circle cx={14.5} cy={195.5} r={14.5} fill={color} />
      <Circle cx={332.5} cy={195.5} r={14.5} fill={color} />
    </Svg>
  )
}

export default ParallelogramSVG
