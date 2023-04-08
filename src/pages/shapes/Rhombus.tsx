import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLOR from "../../assets/ColorData";
import UNIT from "../../assets/UnitData";
import DropdownComponent from "../../components/DropDownComponent";
import NumericInputComponent from "../../components/NumericInputComponent";
import OutputComponents from "../../components/OutputComponent";
import SliderComponent from "../../components/SliderComponent";
import RhombusSVG from "../../components/SVG/RhombusSVG";
import SquareSVG from "../../components/SVG/SquareSVG";
import convertUnits from "../../utils/convertUnits";
import { calculateRhombus, findDiagonal } from "../../utils/shapeCalculator";


const RhombusScreen = () => {

  const BG_COLOR = COLOR.RHOMBUS[1]
  const backgroundStyle = { backgroundColor: BG_COLOR };
  const [inputUnits, setInputUnits] = useState(UNIT[0])
  const [outputUnits, setOutputUnits] = useState(UNIT[1])
  const [side1, setSide1] = useState<string>('')
  const [side2, setSide2] = useState<string>('')
  const [roundOff, setRoundOff] = useState<number>(0)
  const value1 = convertUnits(parseFloat(side1), inputUnits.symbol, outputUnits.symbol, UNIT);
  const value2 = convertUnits(parseFloat(side2), inputUnits.symbol, outputUnits.symbol, UNIT);
  const property = calculateRhombus(value1, value2)
  const VAL = {
    DIAGONAL1: parseFloat(value1.toFixed(roundOff)),
    DIAGONAL2: parseFloat(value2.toFixed(roundOff)),
    SIDE: parseFloat((property.side).toFixed(roundOff)),
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
                <RhombusSVG color="white" size={250} />
            </View>
        </View>
        <DropdownComponent data={UNIT} init={inputUnits} setInit={setInputUnits} placeholder="Select Input Unit" highlight={BG_COLOR} />
        <NumericInputComponent init={side1} setInit={setSide1} placeholder="First Diagonal" highlight={BG_COLOR} />
        <NumericInputComponent init={side2} setInit={setSide2} placeholder="Second Diagonal" highlight={BG_COLOR} />
        <DropdownComponent data={UNIT} init={outputUnits} setInit={setOutputUnits} placeholder="Select Output Unit" highlight={BG_COLOR} />
        <View style={styles.outputWrapper}>
          <OutputComponents color={BG_COLOR} title="Diagonal 1" data={VAL.DIAGONAL1} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Diagonal 2" data={VAL.DIAGONAL2} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Side" data={VAL.SIDE} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Perimeter" data={VAL.PERIMETER} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} unit={2} title="Area" data={VAL.AREA} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Angle 1" data={VAL.ANGLE1} symbol='degree' />
          <OutputComponents color={BG_COLOR} title="Angle 2" data={VAL.ANGLE2} symbol='degree' />
          <SliderComponent color={BG_COLOR} roundOff={roundOff} setRoundOff={setRoundOff} />
        </View>
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

export default RhombusScreen