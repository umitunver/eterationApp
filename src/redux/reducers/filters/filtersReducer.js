import * as types from '@src/redux/type';

const INITIAL_STATE = {
  sortByFilter: '',
  brandFilter: [],
  modelFilter: [],
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

    default:
      return {...state};
  }
};
