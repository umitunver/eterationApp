import * as types from '@src/redux/type';

const INITIAL_STATE = {
  productsData: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS_DATA:
      return {
        ...state,
        productsData: action.data,
      };

    default:
      return {...state};
  }
};