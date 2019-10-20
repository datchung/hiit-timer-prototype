import { ReduceStore } from 'flux/utils';
import uuid from 'uuid';
import RecordActionTypes from './RecordActionTypes';
import Dispatcher from '../Dispatcher';
import Record from './Record';
import RecordPersistence from './RecordPersistence';

class RecordStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return RecordPersistence.getSavedRecords();
  }

  reduce(state, action) {
    switch (action.type) {
      case RecordActionTypes.ADD_RECORD:
        // Don't add records with no text.
        if (!action.text) {
          return state;
        }
        var dateCreated = + new Date();
        var modifiedState = [
          ...state, 
          new Record({
            id: uuid(),
            text: action.text,
            dateCreated: dateCreated,
            dateModified: dateCreated
          })
        ];

        RecordPersistence.saveRecords(modifiedState);
        return modifiedState;
      
      case RecordActionTypes.UPDATE_RECORD:
          var record = state.find(s => s.id === action.record.id);
          if(!record) return state;
  
          var modifiedState = state.map(s => {
            if(s.id !== action.record.id) return s;
            
            return new Record({
              id: s.id,
              text: action.record.text,
              dateCreated: s.dateCreated,
              dateModified: + new Date()
            });
          });
  
          RecordPersistence.saveRecords(modifiedState);
          return modifiedState;

      case RecordActionTypes.DELETE_RECORD:
        if(!state.find(s => s.id === action.id)) return state;

        var modifiedState = state.filter(s => s.id != action.id);

        RecordPersistence.saveRecords(modifiedState);
        return modifiedState;
        
      default:
        return state;
    }
  }
}

export default new RecordStore();