import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

export default function FilterArea() {
  return (
    <View style={styles.filter}>
      <Text style={styles.filterText}>Filters:</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Select Filter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
  },
  filterText: {
    fontWeight: '500',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 10,
    width: 158,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 14,
  },
});
