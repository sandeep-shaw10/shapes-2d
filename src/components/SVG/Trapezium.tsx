import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function TrapeziumSVG({ props, color = 'red', size=100 }: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 394 298"
      fill="none"
      {...props}
    >
      <Path
        d="M291.676 14H99.904L14 284h366L291.676 14z"
        stroke={color}
        strokeOpacity={0.5}
        strokeWidth={10}
      />
      <Circle cx={99.5} cy={14.5} r={14.5} fill={color} />
      <Circle cx={379.5} cy={283.5} r={14.5} fill={color} />
      <Circle cx={14.5} cy={283.5} r={14.5} fill={color} />
      <Circle cx={290.5} cy={14.5} r={14.5} fill={color} />
    </Svg>
  )
}

export default TrapeziumSVG