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
        <Text style={[styles.label, isFocus && { color: highlight }]}>
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
        autoCapitalize={'none'}
        value={init ? String(init) : ''}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChangeText={item => {
          const lastVal = item.substring(item.length-1)
          if(isNaN(parseInt(lastVal)) && lastVal !== ',' && lastVal !== '.' && lastVal !== ''){ return }
          if(lastVal === ',') {
            setInit(item.substring(0,item.length-1));
          }else{
              if(item.split('.').length <= 2){
                setInit(item)
              }else{
                setInit(item.substring(0,item.length-1))
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