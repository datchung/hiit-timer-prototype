var FilterSortPersistence = (function() {
  function _getStorageKey() {
    return "DC_FilterSort";
  }

  function getSavedState() {
    var defaultState = {
      fitler: 'all',
      sort: 'newestFirst'
    };

    var savedString = localStorage[_getStorageKey()];
    if(!savedString) return defaultState;

    var savedObject = JSON.parse(savedString);
    if(!savedObject) return defaultState;

    return savedObject;
  }

  function saveState(state) {
    localStorage[_getStorageKey()] = JSON.stringify(state);
  }

  return {
    getSavedState: getSavedState,
    saveState: saveState
  };
}());

export default FilterSortPersistence;