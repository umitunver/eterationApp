import { GET_PRODUCTS_DATA } from '@src/redux/type';

const INITIAL_STATE = {
  productsData: '',
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS_DATA:
      return {
        ...state,
        productsData: action.data,
        isLoading: action.loading
      };

    default:
      return { ...state };
  }
};
