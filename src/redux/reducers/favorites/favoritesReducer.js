import { ADD_FAVORITE, REMOVE_FAVORITE } from '@src/redux/type';

const INITIAL_STATE = {
  favoriteItems: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      const item = action.data;
      const existItem =
        state?.favoriteItems?.length &&
        state.favoriteItems.find((x) => x.id === item?.id);
      if (existItem) {
        return {
          ...state,
          favoriteItems: state.favoriteItems.map((x) =>
            x.id === existItem?.id ? item : x
          )
        };
      } else {
        return {
          ...state,
          favoriteItems: [...state.favoriteItems, item]
        };
      }

    case REMOVE_FAVORITE:
      return {
        favoriteItems: state.favoriteItems.filter(
          (x) => x?.id !== action.data.id
        )
      };

    default:
      return { ...state };
  }
};
