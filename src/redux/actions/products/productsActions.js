import {getProductsCall} from '@src/redux/api/products/productsAPICall';
import {GET_PRODUCTS_DATA} from '@src/redux/type';

export const getProductsAction = params => {
  return async dispatch => {
    try {
      const response = await getProductsCall();
      dispatch({type: GET_PRODUCTS_DATA, data: response});
    } catch (error) {
      console.log('error: action:', error);
    }
  };
};
