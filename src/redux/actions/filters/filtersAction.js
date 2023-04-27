import { getFiltersCall } from '@src/redux/api/filters/filtersAPICall';
import { ADD_FILTER, GET_FILTER } from '@src/redux/type';

export const filterUpdateAction = (params) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ADD_FILTER,
        sortByFilter: params?.sortByFilter,
        brandFilter: params?.brandFilter,
        modelFilter: params?.modelFilter
      });
    } catch (error) {
      console.log('error: action:', error);
    }
  };
};

export const getFilterAction = (params) => {
  return async (dispatch) => {
    try {
      const response = await getFiltersCall(params);
      dispatch({ type: GET_FILTER, data: response });
    } catch (error) {
      console.log('error: action:', error);
    }
  };
};
