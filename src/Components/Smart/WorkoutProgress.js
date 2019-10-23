import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import WorkoutProgressSimple from '../Simple/WorkoutProgressSimple';
import T from '../../Localization/i18n';

function WorkoutProgress(props) {
  const [record, setRecord] = useState({
    id: null,
    text: "",
    intervalSeconds: 30,
    dateCreated: 0,
    dateModified: 0,
  });
  const [recordItemIndex, setRecordItemIndex] = useState(0)
  const [recordItems, setRecordItems] = useState([]);
  const [intervalId, setIntervalId] = useState(0);
  const [name, setName] = useState("");
  const [secondsRemaining, setSecondsRemaining] = useState(30);
  
  useEffect(() => {
    const id = props.match.params.id;
    var recordById = props.records.find(t => t.id === id);
    if(!recordById) return;

    setRecord({...recordById});
    setRecordItemIndex(0);

    var items = recordById.text.split("\n").map(item => {
      return {
        name: item,
        secondsRemaining: recordById.intervalSeconds,
        secondsTotal: recordById.intervalSeconds,
      };
    });
    setRecordItems(items);

    setName(items[0].name);
    setSecondsRemaining(items[0].secondsRemaining);

    setIntervalId(startItem(items[0]));
  }, [props.match.params.id]);

  function startItem(item) {
    return window.setInterval(function() {
      document.getElementById('alarm').play();

      if(item == null) return;

      //     showTimerTask(i, tasks.length, tasks[i]);
      timerCountdownId = startTimerCountdown(item);

      // if(++i > tasks.length - 1) {
        // window.clearInterval(intervalId);
        // window.clearInterval(timerCountdownId);
        // resetKeepScreenOn();
        // showTimerDone();

        // window.setTimeout(function() {
        //     showConfiguration();
        // }, 1500);
      // }
      // else {
      //     showTimerTask(i, tasks.length, tasks[i]);
      //     timerCountdownId = startTimerCountdown(intervalSeconds);
      // }
    }, item.secondsTotal * 1000);
  }

  function startTimerCountdown() {
    var timerCountdownId = window.setInterval(function() {
      if(secondsRemaining < 1) {
        // Go to next item
        window.clearInterval(timerCountdownId);
      }
      else {
        setSecondsRemaining(secondsRemaining - 1000);
      }
    }, 1000);

    return timerCountdownId;
  }

  return (
    <React.Fragment>
      <WorkoutProgressSimple 
        name={name}
        secondsRemaining={secondsRemaining}
        />

      <audio id="alarm" controls="controls">
        <source id="alarm-sound" src="assets/alarm.mp3" type="audio/mpeg" />
      </audio>
    </React.Fragment>
  );
}

export default WorkoutProgress;