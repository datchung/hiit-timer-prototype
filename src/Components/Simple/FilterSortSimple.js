import React from 'react';
import T from '../../Localization/i18n';

function FilterSortSimple(props) {
  return (
    <React.Fragment>
      <div className="columns is-mobile">
        <div className="column is-narrow">
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label has-text-weight-normal">{T.t("filter")}</label>
            </div>
            <div className="field-body">
              <div className="field is-narrow">
                <div className="control">
                  <div className="select">
                    <select
                      value={props.selectedFilter}
                      onChange={props.onFilter}
                      >
                      <option value="all">{T.t("all")}</option>
                      {/* <option value="notDone">{T.t("notDone")}</option>
                      <option value="done">{T.t("done")}</option> */}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-narrow">
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label has-text-weight-normal">{T.t("sort")}</label>
            </div>
            <div className="field-body">
              <div className="field is-narrow">
                <div className="control">
                  <div className="select">
                    <select
                      value={props.selectedSort}
                      onChange={props.onSort}
                      >
                      <option value="newestFirst">{T.t("newestFirst")}</option>
                      <option value="oldestFirst">{T.t("oldestFirst")}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FilterSortSimple;