import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { BasketCard } from '@src/components';

export default function BasketList({ cartItems }) {
  return (
    <View>
      {cartItems?.length > 0 ? (
        cartItems?.map((item, index) => <BasketCard key={index} data={item} />)
      ) : (
        <View style={styles.warning}>
          <Text>Your cart is empty!</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  warning: {
    backgroundColor: '#f6f6f6',
    padding: 16
  }
});
