import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function CustomHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.logoText}>E-Market</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2A59FE',
    padding: 16,
    marginTop: Platform.OS === 'ios' ? 55 : 0,
  },
  logoText: {
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '800',
    color: '#fff',
  },
});
