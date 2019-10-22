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

  useEffect(() => {
    const id = props.match.params.id;
    var recordById = props.records.find(t => t.id === id);
    if(!recordById) return;

    setRecord({...recordById});
  }, [props.match.params.id]);

  return (
    <WorkoutProgressSimple 
      record={record}
      />
  );
}

export default WorkoutProgress;