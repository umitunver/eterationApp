import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {ProductCard} from '@src/components';

export default function ProductList() {
  return (
    <View style={styles.productList}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </View>
  );
}

const styles = StyleSheet.create({
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 24,
  },
});
