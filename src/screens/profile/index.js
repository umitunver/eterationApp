import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { CustomHeader } from '@src/components';

export default function Profile() {
  return (
    <View style={styles.container}>
      <CustomHeader type={'normal'} />
      <View style={styles.content}>
        <Text>Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  content: {
    padding: 16
  }
});
