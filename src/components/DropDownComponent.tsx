import React, { PropsWithChildren, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { UnitData } from '../type';


type ComponentsProps = PropsWithChildren<{
    data: UnitData[],
    placeholder: string,
    highlight: string,
    init: UnitData,
    setInit: (x:UnitData) => void
}>;

const DropdownComponent = ({ data, placeholder, highlight, init, setInit }: ComponentsProps) => {
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
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        itemTextStyle={{ color: highlight }}
        style={[styles.dropdown, isFocus && { borderColor: highlight }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={[styles.selectedTextStyle, { color: highlight }]}
        inputSearchStyle={[styles.inputSearchStyle, { color: highlight }]}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? placeholder : '...'}
        searchPlaceholder="Search..."
        value={init}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setInit(item);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    width: '100%'
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
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
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    paddingLeft: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});