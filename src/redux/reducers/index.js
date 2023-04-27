import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import productsReducer from './products/productsReducer';
import cartReducer from './cart/cartReducer';
import favoritesReducer from './favorites/favoritesReducer';
import filtersReducer from './filters/filtersReducer';
const rootReducer = combineReducers({
  products: productsReducer,
  cart: persistReducer(
    {
      key: 'cartItems',
      storage: AsyncStorage,
    },
    cartReducer,
  ),
  favorites: persistReducer(
    {
      key: 'favoriteItems',
      storage: AsyncStorage,
    },
    favoritesReducer,
  ),
  filters: filtersReducer,
});

export default rootReducer;
