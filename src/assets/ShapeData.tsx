import React from "react"
import CircleSVG from "../components/SVG/CircleSVG"
import NgonSVG from "../components/SVG/NgonSVG"
import ParallelogramSVG from "../components/SVG/ParallelogramSVG"
import RectSVG from "../components/SVG/RectSVG"
import RhombusSVG from "../components/SVG/RhombusSVG"
import SquareSVG from "../components/SVG/SquareSVG"
import TrapeziumSVG from "../components/SVG/Trapezium"
import TriangleSVG from "../components/SVG/TriangleSVG"
import COLOR from "./ColorData"

function colourizeSVG(fragment: JSX.Element, color:string): JSX.Element{
  return React.cloneElement(fragment, {color})
}

const SHAPES = [
    {
      shape: 'Circle',
      to: 'circle',
      color: COLOR.CIRCLE[0],   // 200
      bgColor: COLOR.CIRCLE[1],  //600
      shapeSVG: colourizeSVG(<CircleSVG/>, COLOR.CIRCLE[0])
    },
    {
      shape: 'Triangle',
      to: 'triangle',
      color: COLOR.TRIANGLE[0],   // 200
      bgColor: COLOR.TRIANGLE[1],  // 500
      shapeSVG: colourizeSVG(<TriangleSVG/>, COLOR.TRIANGLE[0])
    },
    {
      shape: 'Square',
      to: 'square',
      color: COLOR.SQUARE[0],   // 200
      bgColor: COLOR.SQUARE[1],  //600
      shapeSVG: colourizeSVG(<SquareSVG/>, COLOR.SQUARE[0])
    },
    {
      shape: 'Rectangle',
      to: 'rectangle',
      color: COLOR.RECTANGLE[0],   // 200
      bgColor: COLOR.RECTANGLE[1],  //600
      shapeSVG: colourizeSVG(<RectSVG/>, COLOR.RECTANGLE[0])
    },
    {
      shape: 'Trapezium',
      to: 'trapezium',
      color: COLOR.TRAPEZIUM[0],   // 200
      bgColor: COLOR.TRAPEZIUM[1],  //600
      shapeSVG: colourizeSVG(<TrapeziumSVG/>, COLOR.TRAPEZIUM[0])
    },
    {
      shape: 'Rhombus',
      to: 'rhombus',
      color: COLOR.RHOMBUS[0],   // 200
      bgColor: COLOR.RHOMBUS[1],  //600
      shapeSVG: colourizeSVG(<RhombusSVG/>, COLOR.RHOMBUS[0])
    },
    {
      shape: 'N-gon',
      to: 'ngon',
      color: COLOR.NGON[0],   // 200
      bgColor: COLOR.NGON[1],  //600
      shapeSVG: colourizeSVG(<NgonSVG/>, COLOR.NGON[0])
    },
    {
      shape: 'Parallelogram',
      to: 'parallelogram',
      color: COLOR.PARALLELOGRAM[0],   // 200
      bgColor: COLOR.PARALLELOGRAM[1],  //600
      shapeSVG: colourizeSVG(<ParallelogramSVG/>, COLOR.PARALLELOGRAM[0])
    },
]


export default SHAPES