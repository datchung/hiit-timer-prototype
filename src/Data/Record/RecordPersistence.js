var RecordPersistence = (function() {
  function _getRecordsStorageKey() {
    return "DC_Records";
  }

  function getSavedRecords() {
    var defaultRecords = [];

    var recordsString = localStorage[_getRecordsStorageKey()];
    if(!recordsString) return defaultRecords;

    var recordsObject = JSON.parse(recordsString);
    if(!recordsObject) return defaultRecords;

    return Array.isArray(recordsObject)
      ? recordsObject
      : defaultRecords;
  }

  function saveRecords(records) {
    localStorage[_getRecordsStorageKey()] = JSON.stringify(records);
  }

  return {
    getSavedRecords: getSavedRecords,
    saveRecords: saveRecords
  };
}());

export default RecordPersistence;