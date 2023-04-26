import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {CustomHeader, SearchInput} from '@src/components';
import {FilterArea, ProductList} from '@src/views';

export default function Home() {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.contain}>
        <SearchInput />
        <FilterArea />
        <ProductList />
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
