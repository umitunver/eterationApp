import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import FilterModal from '../filterModal';

export default function FilterArea() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.filter}>
      <Text style={styles.filterText}>Filters:</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}>
        <Text style={styles.buttonText}>Select Filter</Text>
      </TouchableOpacity>
      {modalVisible && (
        <FilterModal
          closePress={() => {
            setModalVisible(!modalVisible);
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14
  },
  filterText: {
    fontWeight: '500',
    fontSize: 18
  },
  button: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 10,
    width: 158
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 14
  }
});
