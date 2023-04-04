import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function RectSVG({ props, color = 'red', size=100 }: any) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 545 352"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={19.5} cy={19.5} r={19.5} fill={color} />
      <Circle cx={525.5} cy={19.5} r={19.5} fill={color} />
      <Circle cx={19.5} cy={332.5} r={19.5} fill={color} />
      <Circle cx={525.5} cy={332.5} r={19.5} fill={color} />
      <Path
        stroke={color}
        strokeOpacity={0.5}
        strokeWidth={10}
        d="M17 25H524V328H17z"
      />
    </Svg>
  )
}

export default RectSVG
