import React, { useState, useEffect } from 'react';
import ManageRecordSimple from '../Simple/ManageRecordSimple';
import T from '../../Localization/i18n';

function ManageRecord(props) {
  const [errors, setErrors] = useState({});
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

  function onChange({ target }) {
    setRecord({
      ...record,
      [target.name]: target.value
    });
  }

  function formIsValid() {
    const _errors = {};

    if (!record.text) _errors.text = T.t("textRequired");
    setErrors(_errors);
    
    return Object.keys(_errors).length === 0;
  }

  function onSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;

    props.onAddRecord(record.text, record.intervalSeconds);

    // Show WorkoutProgress component
    props.setIsPlaying(true);
  }

  return (
    <ManageRecordSimple
      errors={errors}
      record={record}
      onChange={onChange}
      onSubmit={onSubmit}
      />
  );
}

export default ManageRecord;