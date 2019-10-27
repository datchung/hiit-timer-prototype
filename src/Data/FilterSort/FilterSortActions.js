import ActionTypes from './FilterSortActionTypes';
import Dispatcher from '../Dispatcher';

const Actions = {
  setFilter(filter) {
    Dispatcher.dispatch({
      type: ActionTypes.SET_FILTER,
      filter,
    });
  },
  setSort(sort) {
    Dispatcher.dispatch({
      type: ActionTypes.SET_SORT,
      sort,
    });
  },
};

export default Actions;