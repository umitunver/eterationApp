import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {CustomHeader, SearchInput} from '@src/components';
import {BasketList, FilterArea, ProductList} from '@src/views';

export default function Cart({navigation: {goBack, navigate}}) {
  return (
    <View style={styles.container}>
      <CustomHeader type="normal" />
      <ScrollView style={styles.contain}>
        <BasketList />
      </ScrollView>
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
