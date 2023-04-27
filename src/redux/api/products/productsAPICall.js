import axios from 'axios';
import { GET_PRODUCTS } from '@src/redux/api/products/productsAPI';

export const getProductsCall = async (params) => {
  try {
    const response = await axios({
      method: 'GET',
      url: GET_PRODUCTS,
      headers: {
        'Content-Type': 'application/json'
      },
      params
    });
    const responseData = response?.data;
    return responseData;
  } catch (error) {
    console.log('Products Api Error: ', error);
  }
};
