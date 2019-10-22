import React from 'react';
import T from '../../Localization/i18n';

function WorkoutProgressSimple(props) {
  return (
    <React.Fragment>
      <div className="columns is-mobile">
        <div className="column">
          {props.record.text}
          {props.record.intervalSeconds}
        </div>
      </div>

      <audio id="alarm" controls="controls">
        <source id="alarm-sound" src="assets/alarm.mp3" type="audio/mpeg" />
      </audio>
    </React.Fragment>
  );
}

export default WorkoutProgressSimple;