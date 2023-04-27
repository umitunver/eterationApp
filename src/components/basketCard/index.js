import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import IncDec from '../incDec';

export default function BasketCard({ data }) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>{data?.name}</Text>
        <Text style={styles.price}>{data?.price}₺</Text>
      </View>
      <IncDec item={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20
  },
  title: {
    fontSize: 16
  },
  price: {
    color: '#2A59FE',
    fontWeight: '500'
  }
});
