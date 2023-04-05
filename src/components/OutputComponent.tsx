import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import CopyToClipboard from '../utils/copyClipboard';

interface Props {
  title: string;
  data: number;
  symbol: string;
  color?: string;
  unit ?: number;
}

const OutputComponents = ({ title, data, symbol, color = '#777', unit = 1 }: Props) => {
  return <View style={styles.viewInfo}>
            <View onTouchEnd={() => CopyToClipboard(`${isNaN(data) ? 0 : data}`)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.textTitle} >{title}: </Text>
                <View style={{ flexDirection: 'row', flexWrap:'wrap'  }} >
                    <Text style={[styles.textData, { color: color } ]} >{isNaN(data) ? 0 : data } {symbol}</Text>
                    <Text style={[styles.power, { color: color } ]} >{ unit === 1 ? '' : unit }</Text>
                </View>
            </View>
    </View>;
};

const styles = StyleSheet.create({
    viewInfo:{
        paddingBottom: 16,
    },
    textTitle: {
        fontSize: 18,
        color: "#777"
    },
    textData: {
        fontSize: 16
    },
    power: {
        fontSize: 8,

    }
});

export default OutputComponents;
