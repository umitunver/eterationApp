import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {CustomHeader} from '@src/components';
import {StarIcon} from '@src/constants/icons';
import {AddToCart} from '@src/views';

export default function Details({navigation: {goBack}}) {
  return (
    <View style={styles.container}>
      <CustomHeader type={'detail'} onPress={() => goBack()} />
      <View style={styles.contain}>
        <View style={styles.thumbnail}>
          <TouchableOpacity>
            <View style={styles.favoriteButton}>
              <StarIcon />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Apple iPhone 14 Pro Max 256 GB</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          sodales nibh pretium ipsum faucibus, a commodo tortor blandit. Duis
          pellentesque, purus sed gravida sagittis, tortor urna eleifend ante, a
          volutpat ex est vel ipsum. Etiam in auctor nisi. Donec in mattis enim,
          in bibendum lorem. Nam vitae semper quam.
        </Text>
        <AddToCart />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contain: {
    padding: 16,
    position: 'relative',
    flex: 1,
  },
  thumbnail: {
    width: '100%',
    height: 200,
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
  title: {
    fontWeight: '700',
    fontSize: 20,
    marginTop: 16,
  },
  description: {
    marginTop: 16,
  },
});
