import React from 'react';
import T from '../../Localization/i18n';

function WorkoutProgressSimple(props) {
  if(props.item == null) return null;
  
  return (
    <React.Fragment>
      <p>{`${props.item.name} (${props.item.secondsRemaining})`}</p>

      <audio id="alarm" controls="controls">
        <source id="alarm-sound" src="assets/alarm.mp3" type="audio/mpeg" />
      </audio>
    </React.Fragment>
  );
}

export default WorkoutProgressSimple;