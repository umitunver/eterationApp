import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { CustomHeader } from '@src/components';
import { StarIcon } from '@src/constants/icons';
import { PageBottomButton } from '@src/views';
import { CustomImage } from '@src/components';
import { useDispatch, useSelector } from 'react-redux';
import {
  basketAddAction,
  removeCart
} from '@src/redux/actions/cart/cartAction';
import {
  favAddAction,
  removeFav
} from '@src/redux/actions/favorites/favoritesAction';
import { subString } from '@src/helpers/method';

export default function Details({ route, navigation: { goBack } }) {
  const { data } = route.params;
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const { cartItems } = useSelector((state) => state.cart);
  const [favControl, setFavControl] = useState(0);
  const { favoriteItems } = useSelector((state) => state.favorites);
  useEffect(() => {
    setTotal(cartItems.find((x) => x?.id === data?.id)?.quantity || 0);
  }, [cartItems, data]);
  const addCart = () => {
    dispatch(basketAddAction(data, 1));
  };
  const deleteCart = () => {
    dispatch(removeCart(data?.id));
  };

  const addFavorite = () => {
    dispatch(favAddAction(data));
  };
  const removeFavorite = () => {
    dispatch(removeFav(data));
  };
  useEffect(() => {
    setFavControl(favoriteItems.find((x) => x?.id === data?.id) || 0);
  }, [favoriteItems, data]);
  return (
    <View style={styles.container}>
      <CustomHeader
        type={'detail'}
        onPress={() => goBack()}
        title={subString(data?.name, 20)}
      />
      <View style={styles.contain}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ position: 'relative' }}>
            <CustomImage style={styles.thumbnail} imageUrl={data?.image} />
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={() => {
                {
                  favControl === 0 ? addFavorite() : removeFavorite();
                }
              }}>
              <StarIcon bgColor={favControl} />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>{data?.name}</Text>
          <Text style={styles.description}>{data?.description}</Text>
        </ScrollView>
        <PageBottomButton
          title={'Price'}
          total={data?.price}
          bgColor={total === 0 ? '#2A59FE' : '#F90000'}
          buttonText={total === 0 ? 'Add To Cart' : 'Remove'}
          onPress={() => {
            total === 0 ? addCart() : deleteCart();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contain: {
    padding: 16,
    position: 'relative',
    flex: 1
  },
  thumbnail: {
    width: '100%',
    height: 200,
    backgroundColor: '#f6f6f6',
    position: 'relative'
  },
  favoriteButton: {
    position: 'absolute',
    right: 6,
    top: 6,
    zIndex: 2,
    width: 24,
    height: 24
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    marginTop: 16
  },
  description: {
    marginTop: 16,
    marginBottom: 100
  }
});
