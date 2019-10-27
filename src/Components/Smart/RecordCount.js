import React from 'react';
import RecordCountSimple from '../Simple/RecordCountSimple';
import T from '../../Localization/i18n';

function RecordCount(props) {
  if (props.records.length === 0) {
    return (
      <RecordCountSimple phrase={T.t("noRecords")} />
    );
  }

  const total = props.records.length;
  const recordPhrase = total > 1 ? T.t("records") : T.t("record");
  const phrase=String.format(T.t("recordCount"), total, recordPhrase);

  return (
    <RecordCountSimple phrase={phrase} />
  );
}

export default RecordCount;