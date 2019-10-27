import React from 'react';
import { Route, Switch } from 'react-router-dom';
import T from '../../Localization/i18n';
import HomePage from './HomePage';
import RecordListPage from './RecordListPage';
import ManageRecordPage from './ManageRecordPage';
import NotFoundPage from './NotFoundPage';

function AppPage(props) {
  return (
    <React.Fragment>
      <div className="columns is-mobile has-background-light">
        <div className="column">
          <img src="assets/images/ic_launcher_round.png" width="18" />
          <span className="title is-5 has-text-weight-normal">&nbsp;{T.t("title")}</span>
        </div>
      </div>
      <Switch>
        <Route path="/" exact render={() => <HomePage {...props} />} />
        <Route path="/records" render={() => <RecordListPage {...props} />} />
        <Route path="/record/manage" render={() => <ManageRecordPage {...props} />} />
        <Route path="/record/:id" render={() => <ManageRecordPage {...props} />} />
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  );
}

export default AppPage;