import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {CustomHeader, SearchInput} from '@src/components';
import {FilterArea, ProductList} from '@src/views';
import {useDispatch, useSelector} from 'react-redux';
import {getProductsAction} from '@src/redux/actions/products/productsActions';

export default function Favorites({navigation: {goBack, navigate}}) {
  const dispatch = useDispatch();
  const {productsData} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

  return (
    <View style={styles.container}>
      <CustomHeader type="normal" />
      <ScrollView style={styles.contain}>
        <ProductList navigate={navigate} data={productsData} />
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
