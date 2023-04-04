import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import CircleSVG from './SVG/CircleSVG';

interface CardProps {
  title: string;
  color: string;
  bgColor: string;
  shapeSVG: any;
  onPress: () => void;
}

const Card = ({ title, onPress, color, bgColor, shapeSVG }: CardProps) => {

  return (
      <View style={[styles.cardContainer, { backgroundColor: bgColor }]}>
        <TouchableOpacity onPress={onPress}>
            <View style={styles.layout}>
                <View>
                    <Text style={[styles.title, {color: color}]}>{title}</Text>
                </View>
                <View style={styles.svgLayout}>
                    {shapeSVG}
                </View>
            </View>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    padding: 16,
    elevation: 8
  },
  title: {
    marginTop: 8,
    marginBottom: 8,
    marginHorizontal: 8,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  layout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  svgLayout: {
    paddingEnd: 20
  }
});

export default Card;
