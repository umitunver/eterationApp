import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import React from 'react';

export default function IncDec() {
  return (
    <View style={styles.content}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textIcon}>-</Text>
      </TouchableOpacity>
      <View style={styles.quantity}>
        <Text style={styles.quantityText}>2</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    backgroundColor: '#2A59FE',
    fontSize: 18,
    paddingHorizontal: 20,
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 20,
    borderRadius: 4,
    height: 39,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textIcon: {
    fontSize: 16,
    fontWeight: '700',
    color: '#626b8b',
  },
});
