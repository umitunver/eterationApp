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
  const {productsData} = useSelector(state => state.products);
  const PAGE_SIZE = 12;

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const {modelFilter, brandFilter, sortByFilter} = useSelector(
    state => state.filters,
  );

  const fetchData = async () => {
    setIsLoading(true);
    const params = {
      page,
      limit: PAGE_SIZE,
      brand: brandFilter ? brandFilter : null,
      model: modelFilter ? modelFilter : null,
      sortBy:
        sortByFilter === 'newToOld' || sortByFilter === 'oldToNew'
          ? 'createdAt'
          : 'price',
      order:
        sortByFilter === 'newToOld' || sortByFilter === 'priceLowToHight'
          ? 'asc'
          : 'desc',
    };
    console.log('params', params);
    dispatch(getProductsAction(params));
    setIsLoading(false);
  };
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    setData([]);
    setPage(1);
    fetchData();
    console.log('yeni data cekilsinn...');
  }, [brandFilter, modelFilter, sortByFilter]);

  useEffect(() => {
    setData(prevData => [...prevData, ...productsData]);
  }, [productsData]);

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
