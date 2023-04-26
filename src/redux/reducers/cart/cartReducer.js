import {ADD_CART, REMOVE_CART, ALL_REMOVE_CART} from '@src/redux/type';

const INITIAL_STATE = {
  cartItems: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CART:
      const item = action.data;

      const existItem =
        state?.cartItems?.length &&
        state.cartItems.find(x => x.id === item?.id);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x =>
            x.id === existItem?.id ? item : x,
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case REMOVE_CART:
      return {
        cartItems: state.cartItems.filter(x => x?.id !== action.data.id),
      };

    case ALL_REMOVE_CART:
      return {
        cartItems: [],
      };
    default:
      return {...state};
  }
};
