import ActionTypes from './RecordActionTypes';
import Dispatcher from '../Dispatcher';

const Actions = {
  addRecord(text, intervalSeconds) {
    Dispatcher.dispatch({
      type: ActionTypes.ADD_RECORD,
      text,
      intervalSeconds,
    });
  },
  updateRecord(record) {
    Dispatcher.dispatch({
      type: ActionTypes.UPDATE_RECORD,
      record,
    });
  },
  deleteRecord(id) {
    Dispatcher.dispatch({
      type: ActionTypes.DELETE_RECORD,
      id,
    });
  }
};

export default Actions;