import {getProductsCall} from '@src/redux/api/products/productsAPICall';
import {GET_PRODUCTS_DATA} from '@src/redux/type';

export const getProductsAction = params => {
  return async dispatch => {
    try {
      const response = await getProductsCall(params);
      dispatch({type: GET_PRODUCTS_DATA, data: response, loading: true});
    } catch (error) {
      console.log('error: action:', error);
      dispatch({type: GET_PRODUCTS_DATA, loading: false});
    }
  };
};
