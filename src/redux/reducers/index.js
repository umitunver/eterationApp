import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import productsReducer from './products/productsReducer';
import cartReducer from './cart/cartReducer';
const rootReducer = combineReducers({
  products: productsReducer,
  cart: persistReducer(
    {
      key: 'cartItems',
      storage: AsyncStorage,
    },
    cartReducer,
  ),
});

export default rootReducer;
