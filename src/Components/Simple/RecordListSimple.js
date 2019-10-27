import React from 'react';
import Record from '../smart/Record';

function RecordListSimple(props) {
  return (
    <React.Fragment>
      {props.records.map(record => (
        <div
          key={record.id}
          className="card"
          >
            <div
              className="card-content"
              >
              <Record
                record={record}
                onToggleRecord={props.onToggleRecord}
                onDeleteRecord={props.onDeleteRecord}
                />
            </div>
        </div>
      ))}
    </React.Fragment>
  );
}

export default RecordListSimple;