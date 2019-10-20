import React, {useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom'
import ManageRecord from '../Smart/ManageRecord';
import T from '../../Localization/i18n';

function ManageRecordPage(props) {
  const [subTitle, setSubTitle] = useState("");

  useEffect(() => {
    const id = props.match.params.id;
    var recordById = props.records.find(t => t.id === id);
    setSubTitle(recordById ? T.t("editRecord") : T.t("createRecord"));
  }, [props.match.params.id]);

  return (
    <React.Fragment>
      <div className="columns is-mobile">
        <div className="column">
          <h4 className="title is-4">{subTitle}</h4>
        </div>
      </div>
      <div className="columns is-mobile">
        <div className="column">
          <Link to="/">
            <button className="button">{T.t("back")}</button>
          </Link>
        </div>
      </div>
      <ManageRecord {...props} />
    </React.Fragment>
  );
}

export default withRouter(ManageRecordPage);