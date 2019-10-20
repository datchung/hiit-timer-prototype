import { ReduceStore } from 'flux/utils';
import FilterSortActionTypes from './FilterSortActionTypes';
import Dispatcher from '../Dispatcher';
import FilterSortPersistence from './FilterSortPersistence';

class FilterSortStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return FilterSortPersistence.getSavedState();
  }

  reduce(state, action) {
    switch (action.type) {
      case FilterSortActionTypes.SET_FILTER:
        if (!action.filter) {
          return state;
        }

        var modifiedState = {
          ...state,
          filter: action.filter
        };

        FilterSortPersistence.saveState(modifiedState);
        return modifiedState;
      
      case FilterSortActionTypes.SET_SORT:
        if (!action.sort) {
          return state;
        }

        var modifiedState = {
          ...state,
          sort: action.sort
        };

        FilterSortPersistence.saveState(modifiedState);
        return modifiedState;
        
      default:
        return state;
    }
  }
}

export default new FilterSortStore();