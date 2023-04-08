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
import WholeInputComponent from "../../components/WholeInputComponent";
import nameNgon from "../../utils/nameNgon";
import { calculateAngles, calculateApothem, calculateNGonArea } from "../../utils/shapeCalculator";
import NgonSVG from "../../components/SVG/NgonSVG";
import COLOR from "../../assets/ColorData";


const NgonScreen = () => {

  const BG_COLOR = COLOR.NGON[1]
  const backgroundStyle = { backgroundColor: BG_COLOR };
  const [inputUnits, setInputUnits] = useState(UNIT[0])
  const [outputUnits, setOutputUnits] = useState(UNIT[1])
  const [radius, setRadius] = useState<string>('')
  const [roundOff, setRoundOff] = useState<number>(0)
  const [side, setSide] = useState<string>('5')
  const value = convertUnits(parseFloat(radius), inputUnits.symbol, outputUnits.symbol, UNIT);
  const VAL = {
    SIDE: parseInt(side),
    LENGTH: parseFloat((value).toFixed(roundOff)),
    APOTHEM: parseFloat((calculateApothem(parseInt(side), value)).toFixed(roundOff)),
    PERIMETER: parseFloat((parseInt(side)*value).toFixed(roundOff)),
    AREA: parseFloat((calculateNGonArea(parseInt(side), value)).toFixed(roundOff)),
    INTERIOR: calculateAngles(parseInt(side)).interiorAngle,
    EXTERIOR: calculateAngles(parseInt(side)).exteriorAngle,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={styles.cardWrapper}>
            <View style={styles.shapeWrapper}>
                <NgonSVG color="white" size={250} />
            </View>
        </View>
        <DropdownComponent data={UNIT} init={inputUnits} setInit={setInputUnits} placeholder="Select Input Unit" highlight={BG_COLOR} />
        <WholeInputComponent init={side} setInit={setSide} placeholder="Sides of N-Gon" highlight={BG_COLOR} />
        <NumericInputComponent init={radius} setInit={setRadius} placeholder="Length of N-Gon" highlight={BG_COLOR} />
        <DropdownComponent data={UNIT} init={outputUnits} setInit={setOutputUnits} placeholder="Select Output Unit" highlight={BG_COLOR} />
        { VAL.SIDE >= 3 ? <View style={styles.outputWrapper}>
          <Text style={{ color: BG_COLOR, fontSize: 24, paddingBottom: 12 }}>{nameNgon(VAL.SIDE)}</Text>
          <OutputComponents color={BG_COLOR} title="Sides" data={VAL.SIDE} symbol='' />
          <OutputComponents color={BG_COLOR} title="Length" data={VAL.LENGTH} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Apothem" data={VAL.APOTHEM} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Perimeter" data={VAL.PERIMETER} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} unit={2} title="Area" data={VAL.AREA} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Interior Angle" data={VAL.INTERIOR} symbol='degree' />
          <OutputComponents color={BG_COLOR} title="Exterior Angle" data={VAL.EXTERIOR} symbol='degree' />
          <SliderComponent color={BG_COLOR} roundOff={roundOff} setRoundOff={setRoundOff} />
        </View>: <View style={styles.outputWrapper}>
          <Text style={{ fontSize: 16, color: "#777" }} >Side Should not be less than 3</Text>
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
  }
})

export default NgonScreen