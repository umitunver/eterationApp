import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

export default function PageBottomButton({
  title,
  total,
  buttonText,
  onPress,
  bgColor
}) {
  return (
    <View style={styles.content}>
      <View>
        <Text style={styles.priceText}>{title}:</Text>
        <Text style={styles.price}>{total} ₺</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, bgColor && { backgroundColor: bgColor }]}
        onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
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
    backgroundColor: '#fff',
    paddingVertical: 20
  },
  button: {
    backgroundColor: '#2A59FE',
    padding: 8,
    paddingHorizontal: 36,
    width: '100%',
    borderRadius: 4,
    maxWidth: 182
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  },
  priceText: {
    color: '#2A59FE',
    fontWeight: '700',
    fontSize: 18
  },
  price: {
    fontSize: 18
  }
});
