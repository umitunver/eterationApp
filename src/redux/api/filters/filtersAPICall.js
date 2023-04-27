import axios from 'axios';
import {GET_FILTERS} from '@src/redux/api/filters/filtersAPI';

export const getFiltersCall = async params => {
  try {
    const response = await axios({
      method: 'GET',
      url: GET_FILTERS,
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    });
    const responseData = response?.data;
    return responseData;
  } catch (error) {
    console.log('Filters Api Error: ', error);
  }
};
