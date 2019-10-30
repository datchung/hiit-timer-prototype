import React, { useState, useEffect } from 'react';
import ManageRecordSimple from '../Simple/ManageRecordSimple';
import T from '../../Localization/i18n';

function ManageRecord(props) {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const id = props.match.params.id;
    var recordById = props.records.find(t => t.id === id);
    if(!recordById) return;

    props.setRecord({...recordById});
  }, [props.match.params.id]);

  function onChange({ target }) {
    props.setRecord({
      ...props.record,
      [target.name]: target.value
    });
  }

  function formIsValid() {
    const _errors = {};

    if (!props.record.text) _errors.text = T.t("textRequired");
    setErrors(_errors);
    
    return Object.keys(_errors).length === 0;
  }

  function onSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;

    props.onAddRecord(props.record.text, props.record.intervalSeconds);

    // Show WorkoutProgress component
    props.setIsPlaying(true);
  }

  return (
    <ManageRecordSimple
      errors={errors}
      record={props.record}
      onChange={onChange}
      onSubmit={onSubmit}
      />
  );
}

export default ManageRecord;