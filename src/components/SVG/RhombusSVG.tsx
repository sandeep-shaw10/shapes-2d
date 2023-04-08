import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function RhombusSVG({ props, color = 'red', size=100 }: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="76 50 370 370"
      fill="none"
      {...props}
    >
      <Path
        d="M177.856 130.209l252.374-1.729-82.135 238.642L95.72 368.85l82.136-238.641z"
        stroke={color}
        strokeWidth={10}
        strokeOpacity={0.5}
      />
      <Circle cx={95.5} cy={365.5} r={14.5} fill={color} />
      <Circle cx={348.5} cy={365.5} r={14.5} fill={color} />
      <Circle cx={178.5} cy={127.5} r={14.5} fill={color} />
      <Circle cx={431.5} cy={127.5} r={14.5} fill={color} />
    </Svg>
  )
}

export default RhombusSVG
