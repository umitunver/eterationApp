import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {ProductCard} from '@src/components';

export default function ProductList({navigate}) {
  return (
    <View style={styles.productList}>
      <ProductCard navigate={navigate} />
      <ProductCard navigate={navigate} />
      <ProductCard navigate={navigate} />
      <ProductCard navigate={navigate} />
      <ProductCard navigate={navigate} />
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
