import React from "react"
import CircleSVG from "../components/SVG/CircleSVG"
import RectSVG from "../components/SVG/RectSVG"
import SquareSVG from "../components/SVG/SquareSVG"
import TrapeziumSVG from "../components/SVG/Trapezium"
import TriangleSVG from "../components/SVG/TriangleSVG"

function colourizeSVG(fragment: JSX.Element, color:string): JSX.Element{
  return React.cloneElement(fragment, {color})
}

const SHAPES = [
    {
      shape: 'Circle',
      to: 'circle',
      color: '#bbf7d0',   // 200
      bgColor: '#16a34a',  //600
      shapeSVG: colourizeSVG(<CircleSVG/>, '#bbf7d0')
    },
    {
      shape: 'Triangle',
      to: 'triangle',
      color: '#a7f3d0',   // 200
      bgColor: '#059669',  // 500
      shapeSVG: colourizeSVG(<TriangleSVG/>, '#a7f3d0')
    },
    {
      shape: 'Square',
      to: 'square',
      color: '#a5f3fc',   // 200
      bgColor: '#0891b2',  //600
      shapeSVG: colourizeSVG(<SquareSVG/>, '#a5f3fc')
    },
    {
      shape: 'Rectangle',
      to: 'rectangle',
      color: '#bae6fd',   // 200
      bgColor: '#0284c7',  //600
      shapeSVG: colourizeSVG(<RectSVG/>, '#bae6fd')
    },
    {
      shape: 'Trapezium',
      to: 'trapezium',
      color: '#c7d2fe',   // 200
      bgColor: '#4f46e5',  //600
      shapeSVG: colourizeSVG(<TrapeziumSVG/>, '#c7d2fe')
    },
    {
      shape: 'N-gon',
      to: 'ngon',
      color: '#c7d2fe',   // 200
      bgColor: '#4f46e5',  //600
      shapeSVG: colourizeSVG(<TrapeziumSVG/>, '#c7d2fe')
    },
]


export default SHAPES