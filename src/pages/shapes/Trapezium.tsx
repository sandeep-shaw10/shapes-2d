import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLOR from "../../assets/ColorData";
import UNIT from "../../assets/UnitData";
import DropdownComponent from "../../components/DropDownComponent";
import NumericInputComponent from "../../components/NumericInputComponent";
import OutputComponents from "../../components/OutputComponent";
import SliderComponent from "../../components/SliderComponent";
import TrapeziumSVG from "../../components/SVG/Trapezium";
import convertUnits from "../../utils/convertUnits";


const TrapeziumScreen = () => {

  const BG_COLOR = COLOR.TRAPEZIUM[1]
  const backgroundStyle = { backgroundColor: BG_COLOR };
  const [inputUnits, setInputUnits] = useState(UNIT[0])
  const [outputUnits, setOutputUnits] = useState(UNIT[1])
  const [side1, setSide1] = useState<string>('')
  const [side2, setSide2] = useState<string>('')
  const [side3, setSide3] = useState<string>('')
  const [roundOff, setRoundOff] = useState<number>(0)
  const value1 = convertUnits(parseFloat(side1), inputUnits.symbol, outputUnits.symbol, UNIT);
  const value2 = convertUnits(parseFloat(side2), inputUnits.symbol, outputUnits.symbol, UNIT);
  const height = convertUnits(parseFloat(side3), inputUnits.symbol, outputUnits.symbol, UNIT);
  const VAL = {
    BASE1: parseFloat(value1.toFixed(roundOff)),
    BASE2: parseFloat(value2.toFixed(roundOff)),
    HEIGHT: parseFloat(height.toFixed(roundOff)),
    AREA: parseFloat(((value1 + value2) * height / 2).toFixed(roundOff))
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={styles.cardWrapper}>
            <View style={styles.shapeWrapper}>
                <TrapeziumSVG color="white" size={250} />
            </View>
        </View>
        <DropdownComponent data={UNIT} init={inputUnits} setInit={setInputUnits} placeholder="Select Input Unit" highlight={BG_COLOR} />
        <NumericInputComponent init={side1} setInit={setSide1} placeholder="First Parallel Side" highlight={BG_COLOR} />
        <NumericInputComponent init={side2} setInit={setSide2} placeholder="Second Parallel Side" highlight={BG_COLOR} />
        <NumericInputComponent init={side3} setInit={setSide3} placeholder="Height between these Side" highlight={BG_COLOR} />
        <DropdownComponent data={UNIT} init={outputUnits} setInit={setOutputUnits} placeholder="Select Output Unit" highlight={BG_COLOR} />
        <View style={styles.outputWrapper}>
          <OutputComponents color={BG_COLOR} title="Side 1" data={VAL.BASE1} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Side 2" data={VAL.BASE2} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Height" data={VAL.HEIGHT} symbol={outputUnits.symbol} />
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


export default TrapeziumScreen