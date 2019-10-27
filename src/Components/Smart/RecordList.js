import React, {useEffect, useState} from 'react';
import RecordListSimple from '../Simple/RecordListSimple';

function RecordList(props) {
  const [records, setRecords] = useState([]);

  useEffect(()=> {
    var records = props.records;
    // switch(props.selectedFilter) {
    //   case 'notDone':
    //     records = records.filter(record => !record.isComplete);
    //     break;
    //   case 'done':
    //     records = records.filter(record => record.isComplete);
    //     break;
    // }

    if(props.selectedSort !== 'oldestFirst') {
      if(records === props.records) records = [...records];
      records = records.reverse();
    }

    setRecords(records);
  }, [props.records, props.selectedFilter, props.selectedSort]);

  return (
    <RecordListSimple
      records={records}
      onToggleRecord={props.onToggleRecord}
      onDeleteRecord={props.onDeleteRecord}
      />
  );
}

export default RecordList;