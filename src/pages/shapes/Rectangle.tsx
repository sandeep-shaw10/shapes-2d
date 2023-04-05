import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UNIT from "../../assets/UnitData";
import DropdownComponent from "../../components/DropDownComponent";
import NumericInputComponent from "../../components/NumericInputComponent";
import OutputComponents from "../../components/OutputComponent";
import RectSVG from "../../components/SVG/RectSVG";
import convertUnits from "../../utils/convertUnits";
import { findDiagonal } from "../../utils/shapeCalculator";


const ReactangleScreen = () => {

  const BG_COLOR = '#0284c7'
  const backgroundStyle = { backgroundColor: BG_COLOR };
  const [inputUnits, setInputUnits] = useState(UNIT[0])
  const [outputUnits, setOutputUnits] = useState(UNIT[1])
  const [side1, setSide1] = useState<string>('')
  const [side2, setSide2] = useState<string>('')
  const value1 = convertUnits(parseFloat(side1), inputUnits.symbol, outputUnits.symbol, UNIT);
  const value2 = convertUnits(parseFloat(side2), inputUnits.symbol, outputUnits.symbol, UNIT);


  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={styles.cardWrapper}>
            <View style={styles.shapeWrapper}>
                <RectSVG color="white" size={250} />
            </View>
        </View>
        <DropdownComponent data={UNIT} init={inputUnits} setInit={setInputUnits} placeholder="Select Unit" highlight={BG_COLOR} />
        <NumericInputComponent init={side1} setInit={setSide1} placeholder="Length" highlight={BG_COLOR} />
        <NumericInputComponent init={side2} setInit={setSide2} placeholder="Breadth" highlight={BG_COLOR} />
        <DropdownComponent data={UNIT} init={outputUnits} setInit={setOutputUnits} placeholder="Select Unit" highlight={BG_COLOR} />
        <View style={styles.outputWrapper}>
          <OutputComponents color={BG_COLOR} title="Length" data={value1} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Breadth" data={value2} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Diagonal" data={findDiagonal(value1, value2)} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Perimeter" data={value1+value2} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} unit={2} title="Area" data={value1*value2} symbol={outputUnits.symbol} />
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

export default ReactangleScreen