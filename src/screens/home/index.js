import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {CustomHeader, SearchInput} from '@src/components';
import {FilterArea, ProductList} from '@src/views';

export default function Home({navigation: {goBack, navigate}}) {
  return (
    <View style={styles.container}>
      <CustomHeader type="normal" />
      <View style={styles.contain}>
        <SearchInput />
        <FilterArea />
        <ProductList navigate={navigate} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contain: {
    padding: 16,
  },
});
