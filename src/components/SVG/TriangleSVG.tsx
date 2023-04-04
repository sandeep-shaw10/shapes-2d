import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function TriangleSVG({ props, color = 'red', size=100 }: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 -25 410 420"
      fill="none"
      {...props}
    >
      <Circle cx={220.5} cy={22.5} r={19.5} fill={color} />
      <Circle cx={49.5} cy={316.5} r={19.5} fill={color} />
      <Circle cx={392.5} cy={316.5} r={19.5} fill={color} />
      <Path
        d="M235.655 31.25L391.973 302c6.736 11.667-1.684 26.25-15.155 26.25H64.182c-13.471 0-21.89-14.583-15.155-26.25L205.345 31.25c6.735-11.667 23.575-11.667 30.31 0z"
        stroke={color}
        strokeWidth={10}
        strokeOpacity={0.5}
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default TriangleSVG
