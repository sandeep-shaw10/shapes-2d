import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLOR from "../../assets/ColorData";
import UNIT from "../../assets/UnitData";
import DropdownComponent from "../../components/DropDownComponent";
import NumericInputComponent from "../../components/NumericInputComponent";
import OutputComponents from "../../components/OutputComponent";
import SliderComponent from "../../components/SliderComponent";
import ParallelogramSVG from "../../components/SVG/ParallelogramSVG";
import SquareSVG from "../../components/SVG/SquareSVG";
import convertUnits from "../../utils/convertUnits";
import { calculateParallelogram, calculateRhombus, findDiagonal } from "../../utils/shapeCalculator";


const ParallelogramScreen = () => {

  const BG_COLOR = COLOR.PARALLELOGRAM[1]
  const backgroundStyle = { backgroundColor: BG_COLOR };
  const [inputUnits, setInputUnits] = useState(UNIT[0])
  const [outputUnits, setOutputUnits] = useState(UNIT[1])
  const [base, setBase] = useState<string>('')
  const [side, setSide] = useState<string>('')
  const [height, setHeight] = useState<string>('')
  const [roundOff, setRoundOff] = useState<number>(0)
  const baseVal = convertUnits(parseFloat(base), inputUnits.symbol, outputUnits.symbol, UNIT);
  const sideVal = convertUnits(parseFloat(side), inputUnits.symbol, outputUnits.symbol, UNIT);
  const heightVal = convertUnits(parseFloat(height), inputUnits.symbol, outputUnits.symbol, UNIT);
  const property = calculateParallelogram(baseVal, sideVal, heightVal)
  const VAL = {
    HEIGHT: parseFloat(heightVal.toFixed(roundOff)),
    BASE: parseFloat(baseVal.toFixed(roundOff)),
    SIDE2: parseFloat(sideVal.toFixed(roundOff)),
    DIAGONAL1: parseFloat((property.diagonal1).toFixed(roundOff)),
    DIAGONAL2: parseFloat((property.diagonal2).toFixed(roundOff)),
    ANGLE1: property.angle1,
    ANGLE2: property.angle2,
    PERIMETER: parseFloat((property.perimeter).toFixed(roundOff)),
    AREA: parseFloat((property.area).toFixed(roundOff))
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={styles.cardWrapper}>
            <View style={styles.shapeWrapper}>
                <ParallelogramSVG color="white" size={250} />
            </View>
        </View>
        <DropdownComponent data={UNIT} init={inputUnits} setInit={setInputUnits} placeholder="Select Input Unit" highlight={BG_COLOR} />
        <NumericInputComponent init={base} setInit={setBase} placeholder="Base Side" highlight={BG_COLOR} />
        <NumericInputComponent init={side} setInit={setSide} placeholder="Adjacent Side" highlight={BG_COLOR} />
        <NumericInputComponent init={height} setInit={setHeight} placeholder="Height" highlight={BG_COLOR} />
        <DropdownComponent data={UNIT} init={outputUnits} setInit={setOutputUnits} placeholder="Select Output Unit" highlight={BG_COLOR} />
        { VAL.HEIGHT <= VAL.SIDE2 ? <View style={styles.outputWrapper}>
          <OutputComponents color={BG_COLOR} title="Base" data={VAL.BASE} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Side" data={VAL.SIDE2} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Height" data={VAL.HEIGHT} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Perimeter" data={VAL.PERIMETER} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} unit={2} title="Area" data={VAL.AREA} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Diagonal 1" data={VAL.DIAGONAL1} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Diagonal 2" data={VAL.DIAGONAL2} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Angle 1" data={VAL.ANGLE1} symbol='degree' />
          <OutputComponents color={BG_COLOR} title="Angle 2" data={VAL.ANGLE2} symbol='degree' />
          <SliderComponent color={BG_COLOR} roundOff={roundOff} setRoundOff={setRoundOff} />
        </View> : <View style={styles.outputWrapper}>
          <Text style={{ fontSize: 16, color: "#777" }} >Height must be less than or equal to the Side length</Text>
        </View>}
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  cardWrapper: {
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  shapeWrapper: {
    padding: 20,
  },
  outputWrapper: {
    backgroundColor: 'white',
    padding: 16,
    width: '100%',
    paddingBottom: 32
  },
})

export default ParallelogramScreen