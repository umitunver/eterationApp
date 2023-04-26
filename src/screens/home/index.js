import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {CustomHeader, SearchInput} from '@src/components';
import {FilterArea, ProductList} from '@src/views';
import {getProductsAction} from '@src/redux/actions/products/productsActions';
import {useDispatch, useSelector} from 'react-redux';

export default function Home({navigation: {goBack, navigate}}) {
  const dispatch = useDispatch();
  const {productsData} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);


  return (
    <View style={styles.container}>
      <CustomHeader type="normal" />
      <View style={styles.contain}>
        <SearchInput />
        <FilterArea />
        <ProductList navigate={navigate} data={productsData} />
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
