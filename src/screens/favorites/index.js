import {View, FlatList, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {CustomHeader, ProductCard} from '@src/components';
import {useDispatch, useSelector} from 'react-redux';

export default function Favorites({navigation: {goBack, navigate}}) {
  const {favoriteItems} = useSelector(state => state.favorites);

  console.log('favoriteItems?.data', favoriteItems);
  return (
    <View style={styles.container}>
      <CustomHeader type="normal" />
      <View style={styles.contain}>
        {/* {favoriteItems?.length > 0 && (
          <FlatList
            style={styles.productList}
            data={favoriteItems}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <ProductCard navigate={navigate} data={item} />
            )}
            numColumns={2}
          />
        )} */}
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
});
