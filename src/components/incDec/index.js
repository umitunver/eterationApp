import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {basketAddAction, removeCart} from '@src/redux/actions/cart/cartAction';
import {useDispatch, useSelector} from 'react-redux';
export default function IncDec({item}) {
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);
  const [increaseDecrease, setIncreaseDecrease] = useState(false);
  const {cartItems} = useSelector(state => state.cart);

  useEffect(() => {
    setTotal(cartItems.find(x => x.id === item.id)?.quantity || 0);
  }, [cartItems, item]);

  const incDec = () => {
    setIncreaseDecrease(!increaseDecrease);
    dispatch(basketAddAction(item, 1));
  };
  const increase = () => {
    setTotal(total + 1);
    dispatch(basketAddAction(item, total + 1));
  };
  const decrease = () => {
    if (total > 1) {
      setTotal(total - 1);
      dispatch(basketAddAction(item, total - 1));
    } else {
      setIncreaseDecrease(false);
      dispatch(removeCart(item?.id));
    }
  };
  useEffect(() => {
    if (total > 0) {
      setIncreaseDecrease(true);
    }
  }, [total, item, cartItems]);
  return (
    <View style={styles.content}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          decrease();
        }}>
        <Text style={styles.textIcon}>-</Text>
      </TouchableOpacity>
      <View style={styles.quantity}>
        <Text style={styles.quantityText}>{total}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          increase();
        }}>
        <Text style={styles.textIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    backgroundColor: '#2A59FE',
    fontSize: 18,
    paddingHorizontal: 20,
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 20,
    borderRadius: 4,
    height: 39,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textIcon: {
    fontSize: 16,
    fontWeight: '700',
    color: '#626b8b',
  },
});
