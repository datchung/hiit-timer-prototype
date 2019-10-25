import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import WorkoutProgress from '../Smart/WorkoutProgress';
import T from '../../Localization/i18n';

function WorkoutProgressPage(props) {
  return (
    <React.Fragment>
      <WorkoutProgress {...props} />
    </React.Fragment>
  );
}

export default withRouter(WorkoutProgressPage);