import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {StarIcon} from '@src/constants/icons';

export default function ProductCard({navigate}) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigate('Details');
      }}>
      <View style={styles.thumbnail}>
        <TouchableOpacity>
          <View style={styles.favoriteButton}>
            <StarIcon />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.price}>15.000 ₺</Text>
      <Text style={styles.productName}>iPhone 13 Pro Max 256Gb</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    marginBottom: 14,
    padding: 10,
  },

  thumbnail: {
    width: '100%',
    height: 100,
    backgroundColor: '#f6f6f6',
    position: 'relative',
  },
  favoriteButton: {
    position: 'absolute',
    right: 6,
    top: 6,
    zIndex: 2,
    width: 24,
    height: 24,
  },
  price: {
    color: '#2A59FE',
    fontWeight: '500',
    marginTop: 15,
  },
  productName: {
    fontWeight: '500',
    marginTop: 15,
  },
  button: {
    backgroundColor: '#2A59FE',
    padding: 8,
    width: '100%',
    borderRadius: 4,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});
