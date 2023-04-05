import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DropdownComponent from "../../components/DropDownComponent";
import CircleSVG from "../../components/SVG/CircleSVG";
import NumericInputComponent from "../../components/NumericInputComponent";


const CircleScreen = () => {

  const BG_COLOR = '#16a34a'
  const backgroundStyle = { backgroundColor: BG_COLOR };
  const UNIT = [
    { label: 'Foot (ft)', value: '1', symbol: 'ft' },
    { label: 'Yard (yd)', value: '2', symbol: 'yd' },
    { label: 'Centimeter (cm)', value: '3', symbol: 'cm' },
    { label: 'Meter (m)', value: '4', symbol: 'm' },
    { label: 'KiloMeter (km)', value: '5', symbol: 'km' },
    { label: 'Inch (in)', value: '6', symbol: 'in' },
  ];
  const [units, setUnits] = useState(UNIT[0])
  const [radius, setRadius] = useState<string>('')

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={styles.cardWrapper}>
            <View style={styles.shapeWrapper}>
                <CircleSVG color="white" size={250} />
            </View>
        </View>
        <DropdownComponent data={UNIT} init={units} setInit={setUnits} placeholder="Select Unit" highlight={BG_COLOR} />
        <NumericInputComponent init={radius} setInit={setRadius} placeholder="Radius of Circle" highlight={BG_COLOR} />
        <View style={styles.outputWrapper}>
          <Text style={styles.outputText}>Diameter: {isNaN(parseFloat(radius)) ? 0 : 2*parseFloat(radius)} {units.symbol}</Text>
          <Text style={styles.outputText}>Circumference: {isNaN(parseFloat(radius)) ? 0 : 2*(22/7)*parseFloat(radius)} {units.symbol}</Text>
          <Text style={styles.outputText}>Area: {isNaN(parseFloat(radius)) ? 0 : (22/7)*parseFloat(radius)*parseFloat(radius)} {units.symbol}</Text>

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
  },
  outputText: {
    fontSize: 18
  }
})

export default CircleScreen