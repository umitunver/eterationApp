import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';

export default function SearchInput() {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Search"
        autoCapitalize="none"
        placeholderTextColor="#626b8b"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fafafb',
    padding: 9,
  },
});
