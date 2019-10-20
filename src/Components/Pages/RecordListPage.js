import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import RecordList from '../Smart/RecordList';
import RecordCount from '../Smart/RecordCount';
import FilterSort from '../Smart/FilterSort';
import T from '../../Localization/i18n';

function RecordListPage(props) {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  useEffect(() => {
    setSelectedFilter(props.filterSort.filter);
    setSelectedSort(props.filterSort.sort);
  }, [props.filterSort]);

  return (
    <React.Fragment>
      <RecordCount {...props} />
      <FilterSort
        {...props}
        selectedFilter={selectedFilter}
        selectedSort={selectedSort}
        />
      <div className="card">
        <div className="card-content">
          <Link to="./record/manage">
            <button className="button is-primary is-fullwidth">{T.t("createRecord")}</button>
          </Link>
        </div>
      </div>
      <RecordList
        {...props}
        selectedFilter={selectedFilter}
        selectedSort={selectedSort}
        />
    </React.Fragment>
  );
}

export default RecordListPage;