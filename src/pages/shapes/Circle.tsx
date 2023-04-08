import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DropdownComponent from "../../components/DropDownComponent";
import CircleSVG from "../../components/SVG/CircleSVG";
import NumericInputComponent from "../../components/NumericInputComponent";
import UNIT from "../../assets/UnitData";
import OutputComponents from "../../components/OutputComponent";
import convertUnits from "../../utils/convertUnits";
import SliderComponent from "../../components/SliderComponent";
import COLOR from "../../assets/ColorData";


const CircleScreen = () => {

  const BG_COLOR = COLOR.CIRCLE[1]
  const backgroundStyle = { backgroundColor: BG_COLOR };
  const [inputUnits, setInputUnits] = useState(UNIT[0])
  const [outputUnits, setOutputUnits] = useState(UNIT[1])
  const [radius, setRadius] = useState<string>('')
  const [roundOff, setRoundOff] = useState<number>(0)
  const value = convertUnits(parseFloat(radius), inputUnits.symbol, outputUnits.symbol, UNIT);
  const VAL = {
    RADIUS: parseFloat(value.toFixed(roundOff)),
    DIAMETER: parseFloat((value*2).toFixed(roundOff)),
    CIRCUMFERENCE: parseFloat((2*Math.PI*value).toFixed(roundOff)),
    AREA: parseFloat((Math.PI*value*value).toFixed(roundOff))
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={styles.cardWrapper}>
            <View style={styles.shapeWrapper}>
                <CircleSVG color="white" size={250} />
            </View>
        </View>
        <DropdownComponent data={UNIT} init={inputUnits} setInit={setInputUnits} placeholder="Select Input Unit" highlight={BG_COLOR} />
        <NumericInputComponent init={radius} setInit={setRadius} placeholder="Radius of Circle" highlight={BG_COLOR} />
        <DropdownComponent data={UNIT} init={outputUnits} setInit={setOutputUnits} placeholder="Select Output Unit" highlight={BG_COLOR} />
        <View style={styles.outputWrapper}>
          <OutputComponents color={BG_COLOR} title="Radius" data={VAL.RADIUS} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Diameter" data={VAL.DIAMETER} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Circumference" data={VAL.CIRCUMFERENCE} symbol={outputUnits.symbol} />
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
  }
})

export default CircleScreen