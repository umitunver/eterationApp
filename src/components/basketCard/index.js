import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import IncDec from '../incDec';

export default function BasketCard() {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>Samsung s22</Text>
        <Text style={styles.price}>15.000₺</Text>
      </View>
      <IncDec />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
  },
  price: {
    color: '#2A59FE',
    fontWeight: '500',
  },
});
