import React from 'react';
import T from '../../Localization/i18n';

function ManageRecordSimple(props) {
  return (
    <div className="columns is-mobile">
      <div className="column">
        <form onSubmit={props.onSubmit}>
          <div className="field">
            <div className="control">
              <input 
                type="Text"
                name="text"
                value={props.record.text || ""}
                onChange={props.onChange}
                className="input"
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