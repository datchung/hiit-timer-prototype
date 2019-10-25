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
  const [itemIndex, setItemIndex] = useState(0)
  const [items, setItems] = useState([]);
  const [intervalId, setIntervalId] = useState(0);
  const [countDownId, setCountDownId] = useState(0);
  const [name, setName] = useState("");
  const [secondsRemaining, setSecondsRemaining] = useState(30);
  
  useEffect(() => {
    const id = props.match.params.id;
    var recordById = props.records.find(t => t.id === id);
    if(!recordById) return;

    var myItems = recordById.text.split("\n").map(item => {
      return {
        name: item,
        secondsRemaining: recordById.intervalSeconds,
        secondsTotal: recordById.intervalSeconds,
      };
    });
    if(myItems.length < 1) return;

    setItems(myItems);
    setItemIndex(0);
    setName(myItems[0].name);
    setSecondsRemaining(myItems[0].secondsRemaining);

    // if(intervalId < 1)
    //   setIntervalId(startItem(myItems[0]));

    var iid = setInterval(timer, 1000);
    setIntervalId(iid);
  }, [props.match.params.id]);

  function timer() {
    var newCount = secondsRemaining - 1;
    if(newCount >= 0) {
      console.info("newCount %o", newCount);
      setSecondsRemaining(newCount);
    }
    else {
      console.info("done count %o", intervalId);
      clearInterval(intervalId);
    }
  };
  
  // function decrementSecondsRemaining() {
  //   console.info(secondsRemaining - 1);
  //   setSecondsRemaining(secondsRemaining - 1);
  // }

  // function startItem(item) {
  //   console.info("startItem");

  //   if(item == null) return;

  //   // Start countdown
  //   setCountDownId(window.setInterval(decrementSecondsRemaining, 1000));

  //   return window.setInterval(function() {
  //     // document.getElementById('alarm').play();

  //     // Go to next item
  //     window.clearInterval(countDownId);
  //     console.info("goToNextItem")
  //   }, item.secondsTotal * 1000);
  // }

  // useEffect(() => {
  //   const id = props.match.params.id;
  //   var recordById = props.records.find(t => t.id === id);
  //   if(!recordById) return;

  //   setRecord({...recordById});
  //   setRecordItemIndex(0);

  //   var items = recordById.text.split("\n").map(item => {
  //     return {
  //       name: item,
  //       secondsRemaining: recordById.intervalSeconds,
  //       secondsTotal: recordById.intervalSeconds,
  //     };
  //   });
  //   setRecordItems(items);

  //   setName(items[0].name);
  //   setSecondsRemaining(items[0].secondsRemaining);

  //   setIntervalId(startItem(items[0]));
  // }, [props.match.params.id]);

  // function startItem(item) {
  //   return window.setInterval(function() {
  //     document.getElementById('alarm').play();

  //     if(item == null) return;

  //     //     showTimerTask(i, tasks.length, tasks[i]);
  //     timerCountdownId = startTimerCountdown(item);

  //     // if(++i > tasks.length - 1) {
  //       // window.clearInterval(intervalId);
  //       // window.clearInterval(timerCountdownId);
  //       // resetKeepScreenOn();
  //       // showTimerDone();

  //       // window.setTimeout(function() {
  //       //     showConfiguration();
  //       // }, 1500);
  //     // }
  //     // else {
  //     //     showTimerTask(i, tasks.length, tasks[i]);
  //     //     timerCountdownId = startTimerCountdown(intervalSeconds);
  //     // }
  //   }, item.secondsTotal * 1000);
  // }

  // function startTimerCountdown() {
  //   var timerCountdownId = window.setInterval(function() {
  //     if(secondsRemaining < 1) {
  //       // Go to next item
  //       window.clearInterval(timerCountdownId);
  //     }
  //     else {
  //       setSecondsRemaining(secondsRemaining - 1000);
  //     }
  //   }, 1000);

  //   return timerCountdownId;
  // }

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