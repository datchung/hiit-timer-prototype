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
  
  useEffect(() => {
    const id = props.match.params.id;
    var recordById = props.records.find(t => t.id === id);
    if(!recordById) return;

    setRecord({...recordById});
    setRecordItemIndex(-1);

    var items = recordById.text.split("\n").map(item => {
      return {
        name: item,
        secondsRemaining: recordById.intervalSeconds,
        secondsTotal: recordById.intervalSeconds,
      };
    });
    setRecordItems(items);

    // setIntervalId();
  }, [props.match.params.id]);

  function startItem(item) {
    return window.setInterval(function() {
      document.getElementById('alarm').play();

      if(item == null) return;


      //     showTimerTask(i, tasks.length, tasks[i]);
      //     timerCountdownId = startTimerCountdown(intervalSeconds);

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
    }, intervalSeconds * 1000);
  }

  return (
    <WorkoutProgressSimple 
      item={recordItems.length > recordItemIndex
        ? recordItems[recordItemIndex]
        : null}
      />
  );
}

export default WorkoutProgress;