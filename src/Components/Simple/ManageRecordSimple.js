import React from 'react';
import T from '../../Localization/i18n';

function ManageRecordSimple(props) {
  return (
    <div className="columns is-mobile">
      <div className="column">
        <form onSubmit={props.onSubmit}>
          <div className="field">
            <label className="label">
              {T.t("exercises")}
            </label>
            <div className="control">
              <textarea
                className="textarea"
                rows="10"
                name="text"
                value={props.record.text}
                onChange={props.onChange}
                />
            </div>
          </div>
          
          <div className="field">
            <label className="label">
              {T.t('interval')}
            </label>
            <div className="control">
              <input 
                type="number"
                className="input"
                name="intervalSeconds"
                value={props.record.intervalSeconds}
                onChange={props.onChange}
                />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button
                type="submit"
                className="button is-primary"
                >
                {T.t("save")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ManageRecordSimple;