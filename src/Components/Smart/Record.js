import React from 'react';
import RecordSimple from '../simple/RecordSimple';

function Record(props) {
  return (
    <RecordSimple
      record={props.record}
      onToggleRecord={props.onToggleRecord}
      onDeleteRecord={props.onDeleteRecord}
      />
  );
}

export default Record;