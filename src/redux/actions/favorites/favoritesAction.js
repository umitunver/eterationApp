import {ADD_FAVORITE, REMOVE_FAVORITE} from '@src/redux/type';

export const favAddAction = data => {
  return dispatch => {
    try {
      dispatch({
        type: ADD_FAVORITE,
        data: data,
      });
    } catch (error) {
      console.log('error: action:', error);
    }
  };
};

export const removeFav = data => {
  return async dispatch => {
    try {
      dispatch({
        type: REMOVE_FAVORITE,
        data: data,
      });
    } catch (error) {
      console.log('error: action:', error);
    }
  };
};
