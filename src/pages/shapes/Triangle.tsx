import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UNIT from "../../assets/UnitData";
import DropdownComponent from "../../components/DropDownComponent";
import NumericInputComponent from "../../components/NumericInputComponent";
import OutputComponents from "../../components/OutputComponent";
import TriangleSVG from "../../components/SVG/TriangleSVG";
import convertUnits from "../../utils/convertUnits";
import { triangleArea } from "../../utils/shapeCalculator";

interface Props {
  v1: string;
  v2: string;
  v3: string
}

const InValid = ({v1, v2, v3}: Props) => {
  const s1 = v1 === '' ? 0 : parseInt(v1)
  const s2 = v2 === '' ? 0 : parseInt(v2)
  const s3 = v3 === '' ? 0 : parseInt(v3)
  return <Text style={{ fontSize: 16 }}>{`${s1+s2>s3 ? 'Valid' : 'InValid'} : ${s1}+${s2} > ${s3}`}</Text>
}

const TriangleScreen = () => {

  const BG_COLOR = '#059669'
  const backgroundStyle = { backgroundColor: BG_COLOR };
  const [inputUnits, setInputUnits] = useState(UNIT[0])
  const [outputUnits, setOutputUnits] = useState(UNIT[1])
  const [side1, setSide1] = useState<string>('')
  const [side2, setSide2] = useState<string>('')
  const [side3, setSide3] = useState<string>('')
  const value1 = convertUnits(parseFloat(side1), inputUnits.symbol, outputUnits.symbol, UNIT);
  const value2 = convertUnits(parseFloat(side2), inputUnits.symbol, outputUnits.symbol, UNIT);
  const value3 = convertUnits(parseFloat(side3), inputUnits.symbol, outputUnits.symbol, UNIT);
  const area = triangleArea(value1, value2, value3)

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={styles.cardWrapper}>
            <View style={styles.shapeWrapper}>
                <TriangleSVG color="white" size={250} />
            </View>
        </View>
        <DropdownComponent data={UNIT} init={inputUnits} setInit={setInputUnits} placeholder="Select Unit" highlight={BG_COLOR} />
        <NumericInputComponent init={side1} setInit={setSide1} placeholder="First Side of Square" highlight={BG_COLOR} />
        <NumericInputComponent init={side2} setInit={setSide2} placeholder="Second Side of Square" highlight={BG_COLOR} />
        <NumericInputComponent init={side3} setInit={setSide3} placeholder="Third Side of Square" highlight={BG_COLOR} />
        <DropdownComponent data={UNIT} init={outputUnits} setInit={setOutputUnits} placeholder="Select Unit" highlight={BG_COLOR} />
        { area !== -1 ? <View style={styles.outputWrapper}>
          <OutputComponents color={BG_COLOR} title="Side 1" data={value1} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Side 2" data={value2} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Side 3" data={value3} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} title="Perimeter" data={value1+value2+value3} symbol={outputUnits.symbol} />
          <OutputComponents color={BG_COLOR} unit={2} title="Area" data={area} symbol={outputUnits.symbol} />
        </View> : <View style={styles.outputWrapper}>
            <Text style={{ fontSize: 32 }}>Not A Valid Triangle</Text>
            <InValid v1={side1} v2={side2} v3={side3} />
            <InValid v1={side1} v2={side3} v3={side2} />
            <InValid v1={side2} v2={side3} v3={side1} />
          </View>
        }
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

export default TriangleScreen