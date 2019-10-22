import React from 'react';
import T from '../../Localization/i18n';

function WorkoutProgressSimple(props) {
  return (
    <div className="columns is-mobile">
      <div className="column">
        {props.record.text}
        {props.record.intervalSeconds}
      </div>
    </div>
  );
}

export default WorkoutProgressSimple;