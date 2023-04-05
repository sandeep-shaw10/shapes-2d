import { UnitData } from "../type";

function convertUnits(inputValue: number, inputUnit: string, outputUnit: string, unitData: UnitData[]): number {
    const inputFactor = unitData.find(unit => unit.symbol === inputUnit)?.conversionFactor || 1;
    const outputFactor = unitData.find(unit => unit.symbol === outputUnit)?.conversionFactor || 1;
    return inputValue * inputFactor / outputFactor;
}

export default convertUnits