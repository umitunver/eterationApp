import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {ProductCard} from '@src/components';

export default function ProductList({navigate, data, fetchData}) {
  const renderFooter = () => {
    return (
      <View style={{paddingVertical: 20}}>
        <Text>Loading...</Text>
      </View>
    );
  };

  return (
    data?.length > 1 && (
      <FlatList
        style={styles.productList}
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <ProductCard navigate={navigate} data={item} />}
        onEndReached={fetchData}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
        numColumns={2}
      />
    )
  );
}

const styles = StyleSheet.create({
  productList: {
    marginTop: 24,
  },
});
