import {ADD_FILTER} from '@src/redux/type';

export const filterUpdateAction = params => {
  return async dispatch => {
    try {
      dispatch({
        type: ADD_FILTER,
        sortByFilter: params?.sortByFilter,
        brandFilter: params?.brandFilter,
        modelFilter: params?.modelFilter,
      });
    } catch (error) {
      console.log('error: action:', error);
    }
  };
};
