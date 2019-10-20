import ActionTypes from './RecordActionTypes';
import Dispatcher from '../Dispatcher';

const Actions = {
  addRecord(text) {
    Dispatcher.dispatch({
      type: ActionTypes.ADD_RECORD,
      text,
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