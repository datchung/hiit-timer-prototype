import React from 'react';
import T from '../../Localization/i18n';

function BackSection(props) {
  function onBackClick() {
    props.onBackClick();
  }

  return (
    <div className="columns is-mobile">
        <div className="column">
          <button className="button" onClick={onBackClick}>
            {T.t("back")}
          </button>
        </div>
      </div>
  );
}

export default BackSection;