import { UnitData } from "../type"
  
  const UNIT: UnitData[] = [
    { label: 'Meter (m)', value: '1', symbol: 'm', conversionFactor: 1 },
    { label: 'Centimeter (cm)', value: '2', symbol: 'cm', conversionFactor: 0.01 },
    { label: 'KiloMeter (km)', value: '3', symbol: 'km', conversionFactor: 1000 },
    { label: 'Foot (ft)', value: '4', symbol: 'ft', conversionFactor: 0.3048 },
    { label: 'Inch (in)', value: '5', symbol: 'in', conversionFactor: 0.0254 },
    { label: 'Yard (yd)', value: '6', symbol: 'yd', conversionFactor: 0.9144 },
]


export default UNIT