import React from 'react';
import { Link } from 'react-router-dom';
import T from '../../localization/i18n';

function RecordSimple(props) {
  return (
    <div className="columns is-mobile">
      <div className="column">
        <Link to={"./record/" + props.record.id}>
          {props.record.isComplete
            ? <del>{props.record.text}</del>
            : <p>{props.record.text}</p>}
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