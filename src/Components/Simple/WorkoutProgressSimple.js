import React from 'react';
import T from '../../Localization/i18n';

function WorkoutProgressSimple(props) {
  return (
    <React.Fragment>
      <p>{`${props.name} (${props.secondsRemaining})`}</p>
    </React.Fragment>
  );
}

export default WorkoutProgressSimple;