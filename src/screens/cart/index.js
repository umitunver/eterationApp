import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CustomHeader, SearchInput} from '@src/components';
import {
  BasketList,
  FilterArea,
  PageBottomButton,
  ProductList,
} from '@src/views';
import {useSelector} from 'react-redux';

export default function Cart({navigation: {goBack, navigate}}) {
  const {cartItems} = useSelector(state => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = cartItems.reduce(
      (acc, val) => acc + val?.quantity * val?.price,
      0,
    );
    setTotalPrice(total);
  }, [cartItems]);

  return (
    <View style={styles.container}>
      <CustomHeader type="normal" />
      <ScrollView style={styles.contain}>
        <BasketList cartItems={cartItems} />
      </ScrollView>
      {cartItems?.length > 0 && (
        <PageBottomButton
          title={'Total'}
          total={totalPrice}
          buttonText={'Complete'}
          onPress={() => {
            console.log('not found!');
          }}
        />
      )}
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
