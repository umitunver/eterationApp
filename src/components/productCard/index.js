import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StarIcon } from '@src/constants/icons';
import { CustomImage } from '@src/components';
import {
  basketAddAction,
  removeCart
} from '@src/redux/actions/cart/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import {
  favAddAction,
  removeFav
} from '@src/redux/actions/favorites/favoritesAction';

export default function ProductCard({ navigate, data }) {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [favControl, setFavControl] = useState(0);
  const { cartItems } = useSelector((state) => state.cart);
  const { favoriteItems } = useSelector((state) => state.favorites);

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
    setTotal(cartItems.find((x) => x?.id === data?.id)?.quantity || 0);
  }, [cartItems, data]);

  useEffect(() => {
    setFavControl(favoriteItems.find((x) => x?.id === data?.id) || 0);
  }, [favoriteItems, data]);
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => {
          navigate('Details', { data: data });
        }}>
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
        <Text style={styles.price}>{data?.price} ₺</Text>
        <Text style={styles.productName}>{data?.name}</Text>
        {total === 0 ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              addCart();
            }}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => {
              deleteCart();
            }}>
            <Text style={styles.buttonText}>Remove to Cart</Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    marginBottom: 14,
    padding: 10
  },

  thumbnail: {
    width: '100%',
    height: 130
  },
  favoriteButton: {
    position: 'absolute',
    right: 6,
    top: 6,
    zIndex: 2,
    width: 24,
    height: 24
  },
  price: {
    color: '#2A59FE',
    fontWeight: '500',
    marginTop: 15
  },
  productName: {
    fontWeight: '500',
    marginTop: 15
  },
  button: {
    backgroundColor: '#2A59FE',
    padding: 8,
    width: '100%',
    borderRadius: 4,
    marginTop: 15
  },
  removeButton: {
    backgroundColor: '#F90000',
    padding: 8,
    width: '100%',
    borderRadius: 4,
    marginTop: 15
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  }
});
