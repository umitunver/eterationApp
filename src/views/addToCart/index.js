import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function AddToCart({data}) {
  return (
    <View style={styles.content}>
      <View>
        <Text style={styles.priceText}>Price:</Text>
        <Text style={styles.price}>{data?.price} ₺</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    position: 'absolute',
    bottom: 30,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2A59FE',
    padding: 8,
    paddingHorizontal: 36,
    width: '100%',
    borderRadius: 4,
    maxWidth: 182,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  priceText: {
    color: '#2A59FE',
    fontWeight: '700',
    fontSize: 18,
  },
  price: {
    fontSize: 18,
  },
});