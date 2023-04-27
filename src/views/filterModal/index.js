import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function FilterModal() {
  return (
    <View style={styles.modal}>
      <Text>FilterModal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
  },
});
