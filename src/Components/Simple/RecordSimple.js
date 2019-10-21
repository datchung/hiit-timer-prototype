import React from 'react';
import { Link } from 'react-router-dom';
import T from '../../localization/i18n';

function RecordSimple(props) {
  return (
    <div className="columns is-mobile">
      <div className="column contains-text-overflow">
        <Link to={"./record/" + props.record.id} className="is-text-overflow-ellipsis">
          {props.record.text}
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