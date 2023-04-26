import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {CustomHeader} from '@src/components';
import {StarIcon} from '@src/constants/icons';
import {AddToCart} from '@src/views';
import {CustomImage} from '@src/components';

export default function Details({route, navigation: {goBack}}) {
  const {data} = route.params;
  return (
    <View style={styles.container}>
      <CustomHeader type={'detail'} onPress={() => goBack()} />
      <View style={styles.contain}>
        <View style={{position: 'relative'}}>
          <CustomImage style={styles.thumbnail} imageUrl={data?.image} />
          <TouchableOpacity style={styles.favoriteButton}>
            <StarIcon />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{data?.name}</Text>
        <Text style={styles.description}>{data?.description}</Text>
        <AddToCart data={data} />
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
