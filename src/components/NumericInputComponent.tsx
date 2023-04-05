import React, { PropsWithChildren, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


type ComponentsProps = PropsWithChildren<{
    placeholder: string,
    highlight: string,
    init: string,
    setInit: (x:string) => void
}>;

const TextInputComponent = ({ placeholder, highlight, init, setInit }: ComponentsProps) => {
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (init || isFocus) {
      return (
        <Text style={[styles.label, { color: highlight }]}>
          {placeholder}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={[styles.container]}>
        {renderLabel()}
      <TextInput
        style = {[styles.inputBox, {color: highlight}]}
        inputMode='decimal'
        keyboardType='decimal-pad'
        placeholder={!isFocus ? placeholder : '...'}
        placeholderTextColor={highlight}
        autoCapitalize={'none'}
        value={init ? String(init) : ''}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChangeText={(item: string) => {
          const lastVal = item.slice(-1);
          if (/[^0-9,.]/.test(lastVal)) {
            return;
          }
          if (lastVal === ',') {
            setInit(item.slice(0, -1));
          } else {
            const parts = item.split('.');
            if (parts.length <= 2) {
              setInit(item);
            } else {
              setInit(item.slice(0, -1));
            }
          }
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    width: '100%',
  },
  inputBox: {
    fontSize: 16,
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingLeft: 16
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
});