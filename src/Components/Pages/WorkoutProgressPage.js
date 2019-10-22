import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import WorkoutProgress from '../Smart/WorkoutProgress';
import T from '../../Localization/i18n';

function WorkoutProgressPage(props) {
  function onBackClick() {
    props.history.goBack();
  }

  return (
    <React.Fragment>
      <div className="columns is-mobile">
        <div className="column">
          <button className="button" onClick={onBackClick}>
            {T.t("back")}
          </button>
        </div>
      </div>
      {/* <div className="columns is-mobile">
        <div className="column">
          <h5 className="title is-5">{T.t("workoutProgress")}</h5>
        </div>
      </div> */}

      <WorkoutProgress {...props} />
    </React.Fragment>
  );
}

export default withRouter(WorkoutProgressPage);