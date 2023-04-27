import {View, FlatList, StyleSheet, Text} from 'react-native';
import React, {useEffect} from 'react';
import {CustomHeader, ProductCard} from '@src/components';
import {useDispatch, useSelector} from 'react-redux';

export default function Favorites({navigation: {goBack, navigate}}) {
  const {favoriteItems} = useSelector(state => state.favorites);

  return (
    <View style={styles.container}>
      <CustomHeader type="normal" />
      <View style={styles.contain}>
        {favoriteItems?.length > 0 ? (
          <FlatList
            style={styles.productList}
            data={favoriteItems}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <ProductCard navigate={navigate} data={item} />
            )}
            numColumns={2}
          />
        ) : (
          <View style={styles.warning}>
            <Text>Your favorites product list is empty!</Text>
          </View>
        )}
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
  productList: {
    marginTop: 24,
  },
  warning: {
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
});
