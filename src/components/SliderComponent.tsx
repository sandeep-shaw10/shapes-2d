import React from 'react';
import {Slider} from '@miblanchard/react-native-slider';
import {StyleSheet, View, Text} from 'react-native';

interface Props {
    color: string;
    roundOff: number;
    setRoundOff: (x: number) => void
}

const SliderComponent = ({ color='red', roundOff, setRoundOff }: Props) => {

    const SLIDER = {
        MAX: 20,
        MIN: 0,
        STEP: 1
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle} >RoundOff: 
                <Text style={{ color: color }}>{`\t${roundOff}`}</Text>
            </Text>
            <Slider 
                value={roundOff} 
                onValueChange={(value) => setRoundOff(value[0])} 
                minimumValue={SLIDER.MIN}
                maximumValue={SLIDER.MAX}
                step={SLIDER.STEP}
                minimumTrackStyle={{ backgroundColor: color, opacity: 0.5  }}
                thumbStyle={{ backgroundColor: color }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 0,
        marginRight: 0,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    textTitle: {
        fontSize: 18,
        color: "#777"
    },
});


export default SliderComponent