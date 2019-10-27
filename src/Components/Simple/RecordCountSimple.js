import React from 'react';

function RecordCountSimple(props) {
  return (
    <div className="columns is-mobile">
      <div className="column content">
        <p>{props.phrase}</p>
      </div>
    </div>
  );
}

export default RecordCountSimple;