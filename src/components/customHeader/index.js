import BackIcon from '@src/constants/icons/backIcon';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function CustomHeader({type, onPress}) {
  return (
    <>
      {type == 'normal' && (
        <View style={styles.header}>
          <Text style={styles.logoText}>E-Market</Text>
        </View>
      )}
      {type == 'detail' && (
        <View style={styles.backHeader}>
          <TouchableOpacity onPress={onPress}>
            <BackIcon />
          </TouchableOpacity>
          <Text style={styles.title}>Apple iPhone 14 Pro Max 256 GB </Text>
        </View>
      )}
    </>
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
  backHeader: {
    backgroundColor: '#2A59FE',
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginTop: Platform.OS === 'ios' ? 55 : 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '800',
    marginLeft: 37.33,
  },
});
