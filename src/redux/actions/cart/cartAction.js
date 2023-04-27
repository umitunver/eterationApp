import { ADD_CART, REMOVE_CART } from '@src/redux/type';

export const basketAddAction = (data, quantity) => {
  return (dispatch) => {
    try {
      dispatch({
        type: ADD_CART,
        data: {
          id: data.id,
          quantity: quantity,
          price: data?.price,
          name: data?.name
        }
      });
    } catch (error) {
      console.log('error: action:', error);
    }
  };
};

export const removeCart = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: REMOVE_CART,
        data: {
          id: id
        }
      });
    } catch (error) {
      console.log('error: action:', error);
    }
  };
};
