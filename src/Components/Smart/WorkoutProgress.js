import React, { useState, useEffect } from 'react';
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
  const [recordItems, setRecordItems] = useState([]);

  useEffect(() => {
    const id = props.match.params.id;
    var recordById = props.records.find(t => t.id === id);
    if(!recordById) return;

    setRecord({...recordById});

    var i = 0;
    var items = recordById.text.split("\n").map(item => {
      ++i;
      return {
        id: i,
        name: item,
        secondsRemaining: recordById.intervalSeconds,
        isPlaying: i == 1,
        hasPlayed: false
      };
    });
    console.info("items %o", items);

    setRecordItems(items);
  }, [props.match.params.id]);

  return (
    <WorkoutProgressSimple 
      // record={record}
      items={recordItems}
      />
  );
}

export default WorkoutProgress;