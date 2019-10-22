import React from 'react';
import T from '../../Localization/i18n';

function WorkoutProgressSimple(props) {
  return (
    <React.Fragment>
      {props.items.map(item => {
        if(!item.hasPlayed && !item.isPlaying) return null;

        return (
          <div
            key={`${item.id}-${item.name}`}
            className="card"
            >
              <div
                  className={item.isPlaying 
                    ? "card-content has-background-primary" 
                    : "card-content"}
                  >
                  {item.id}/{props.items.length} {item.name} {item.secondsRemaining}
                </div>
          </div>
        );
      })}

      <audio id="alarm" controls="controls">
        <source id="alarm-sound" src="assets/alarm.mp3" type="audio/mpeg" />
      </audio>
    </React.Fragment>
  );
}

export default WorkoutProgressSimple;