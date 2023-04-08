import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLOR from "../../assets/ColorData";
import UNIT from "../../assets/UnitData";
import DropdownComponent from "../../components/DropDownComponent";
import NumericInputComponent from "../../components/NumericInputComponent";
import OutputComponents from "../../components/OutputComponent";
import SliderComponent from "../../components/SliderComponent";
import SquareSVG from "../../components/SVG/SquareSVG";
import convertUnits from "../../utils/convertUnits";
import { findDiagonal } from "../../utils/shapeCalculator";


const SquareScreen = () => {

  const BG_COLOR = COLOR.SQUARE[1]
  const backgroundStyle = { backgroundColor: BG_COLOR };
  const [inputUnits, setInputUnits] = useState(UNIT[0])
  const [outputUnits, setOutputUnits] = useState(UNIT[1])
  const [side, setSide] = useState<string>('')
  const [roundOff, setRoundOff] = useState<number>(0)
  const value = convertUnits(parseFloat(side), inputUnits.symbol, outputUnits.symbol, UNIT);
  const VAL = {
    SIDE: parseFloat(value.toFixed(roundOff)),
    DIAGONAL: parseFloat((findDiagonal(value, value)).toFixed(roundOff)),
    PERIMETER: parseFloat((4*value).toFixed(roundOff)),
    AREA: parseFloat((value*value).toFixed(roundOff))
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={styles.cardWrapper}>
            <View style={styles.shapeWrapper}>
                <SquareSVG color="white" size={250} />
            </View>
        </View>
        <DropdownComponent data={UNIT} init={inputUnits} setInit={setInputUnits} placeholder="Select Input Unit" highlight={BG_COLOR} />
        <NumericInputComponent init={side} setInit={setSide} placeholder="Side of Square" highlight={BG_COLOR} />
        <DropdownComponent data={UNIT} init={outputUnits} setInit={setOutputUnits} placeholder="Select Output Unit" highlight={BG_COLOR} />
        <View style={styles.outputWrapper}>
          <OutputComponents color={BG_COLOR} title="Side" data={VAL.SIDE} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Diagonal" data={VAL.DIAGONAL} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Perimeter" data={VAL.PERIMETER} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} unit={2} title="Area" data={VAL.AREA} symbol={outputUnits.symbol} />
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

export default SquareScreen