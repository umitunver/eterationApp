import * as types from '@src/redux/type';

const INITIAL_STATE = {
  sortByFilter: '',
  brandFilter: [],
  modelFilter: [],
  filtersData: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_FILTER:
      return {
        ...state,
        sortByFilter: action.sortByFilter,
        brandFilter: action.brandFilter,
        modelFilter: action.modelFilter,
      };
    case types.GET_FILTER:
      return {
        ...state,
        filtersData: action.data,
      };

    default:
      return {...state};
  }
};
