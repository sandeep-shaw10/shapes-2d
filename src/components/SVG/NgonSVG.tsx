import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function NgonSVG({ props, color = 'red', size=100 }: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 343 347"
      fill="none"
      {...props}
    >
      <Path
        d="M14.272 124.413L171.5 10.18l157.228 114.233-60.056 184.833H74.327L14.272 124.413z"
        stroke={color}
        strokeWidth={10}
        strokeOpacity={0.5}
      />
      <Circle cx={171.5} cy={14.5} r={14.5} fill={color} />
      <Circle cx={267.5} cy={309.5} r={14.5} fill={color} />
      <Circle cx={76.5} cy={309.5} r={14.5} fill={color} />
      <Circle cx={327.5} cy={126.5} r={14.5} fill={color} />
      <Circle cx={14.5} cy={126.5} r={14.5} fill={color} />
    </Svg>
  )
}

export default NgonSVG
