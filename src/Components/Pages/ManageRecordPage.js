import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import ManageRecord from '../Smart/ManageRecord';
import WorkoutProgress from '../Smart/WorkoutProgress';
import BackSection from '../Simple/BackSection';
import T from '../../Localization/i18n';

function ManageRecordPage(props) {
  const [subTitle, setSubTitle] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const id = props.match.params.id;
    var recordById = props.records.find(t => t.id === id);
    setSubTitle(recordById ? T.t("editRecord") : T.t("createRecord"));
  }, [props.match.params.id]);

  function onBackClick() {
    props.history.goBack();
  }

  function onStopPlaying() {
    setIsPlaying(false);
  }

  if(isPlaying)
    return (
      <WorkoutProgress
        {...props}
        onStopPlaying={onStopPlaying}
        />
    );

  return (
    <React.Fragment>
      <BackSection onBackClick={onBackClick} />

      <div className="columns is-mobile">
        <div className="column">
          <h5 className="title is-5">{subTitle}</h5>
        </div>
      </div>

      <ManageRecord
        setIsPlaying={setIsPlaying}
        {...props}
        />
    </React.Fragment>
  );
}

export default withRouter(ManageRecordPage);