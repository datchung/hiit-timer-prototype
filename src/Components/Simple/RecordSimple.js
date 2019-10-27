import React from 'react';
import { Link } from 'react-router-dom';
import DateTimeModule from '../../Modules/DateTimeModule';
import T from '../../localization/i18n';

function RecordSimple(props) {
  return (
    <div className="columns is-mobile">
      <div className="column contains-text-overflow">
        <Link
          to={"./record/" + props.record.id}
          >
          <p className="is-text-overflow-ellipsis">
            {props.record.text}
          </p>
          <p className="is-text-overflow-ellipsis has-text-weight-light">
            {DateTimeModule.getLocalString(props.record.dateCreated)}
          </p>
        </Link>
      </div>
      <div className="column is-narrow">
        <button
          onClick={() => props.onDeleteRecord(props.record.id)}
          className="button is-small"
          >
          {T.t("delete")}
        </button>
      </div>
    </div>
  );
}

export default RecordSimple;