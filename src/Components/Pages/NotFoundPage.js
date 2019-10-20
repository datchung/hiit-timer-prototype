import React from 'react';
import T from '../../Localization/i18n';

function NotFoundPage() {
  return (
    <div className="content">
      <p>{T.t("notFound")}</p>
    </div>
  );
}

export default NotFoundPage;