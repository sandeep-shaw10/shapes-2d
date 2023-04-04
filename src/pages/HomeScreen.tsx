import { PropsWithChildren } from "react";
import { Button, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SHAPES from "../assets/ShapeData";
import Card from "../components/Card";


type ComponentsProps = PropsWithChildren<{
  navigation: any
}>;


const HomeScreen = ({children, navigation}: ComponentsProps) => {

  const BG_COLOR = '#082f49'
  const backgroundStyle = { backgroundColor: BG_COLOR };


  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle='light-content' backgroundColor={backgroundStyle.backgroundColor} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={styles.cardWrapper}>
          {
            SHAPES.map(({shape, to, color, bgColor, shapeSVG}, index) => <Card 
              key={index} 
              title={shape}
              color={color}
              bgColor={bgColor}
              shapeSVG={shapeSVG}
              onPress={() => navigation.navigate(to)}
            />)
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  cardWrapper: {
    paddingBottom: 40
  }
})

export default HomeScreen