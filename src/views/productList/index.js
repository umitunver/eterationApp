import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {ProductCard} from '@src/components';

export default function ProductList({navigate, data}) {
  return (
    <View style={styles.productList}>
      {data ? (
        data?.map((item, index) => (
          <ProductCard key={index} navigate={navigate} data={item} />
        ))
      ) : (
        <Text>Loading..</Text>
      )}
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
