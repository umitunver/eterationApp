import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CustomHeader, SearchInput} from '@src/components';
import {FilterArea, ProductList} from '@src/views';
import {getProductsAction} from '@src/redux/actions/products/productsActions';
import {useDispatch, useSelector} from 'react-redux';
import {ProductCard} from '@src/components';
export default function Home({navigation: {goBack, navigate}}) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const {productsData} = useSelector(state => state.products);

  useEffect(() => {
    setIsLoading(true);
    const params = {
      page: page,
      limit: 12,
    };
    dispatch(getProductsAction(params));
  }, [page]);

  useEffect(() => {
    if (productsData?.length > 0) {
      setData(prevData => [...prevData, ...productsData]);
    }
    setIsLoading(false);
  }, [productsData]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  const renderFooter = () => {
    return isLoading ? (
      <View style={{paddingVertical: 20, height: 40}}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  return (
    <View style={styles.container}>
      <CustomHeader type="normal" />
      <View style={styles.contain}>
        <SearchInput />
        <FilterArea />
        <View>
          {data?.length > 0 ? (
            <FlatList
              style={styles.productList}
              data={data}
              keyExtractor={(item, index) => index}
              renderItem={({item}) => (
                <ProductCard navigate={navigate} data={item} />
              )}
              onEndReached={handleLoadMore}
              onEndReachedThreshold={0.4}
              ListFooterComponent={renderFooter}
              numColumns={2}
              ListFooterComponentStyle={{marginBottom: 300}}
            />
          ) : null}
        </View>
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
