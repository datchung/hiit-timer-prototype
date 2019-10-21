import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import RecordList from '../Smart/RecordList';
// import RecordCount from '../Smart/RecordCount';
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
      <div className="columns is-mobile">
        <div className="column">
          <Link to="/">
            <button className="button">{T.t("back")}</button>
          </Link>
        </div>
      </div>
      <div className="columns is-mobile">
        <div className="column">
          <h5 className="title is-5">{T.t("recordList")}</h5>
        </div>
      </div>

      {/* <RecordCount {...props} /> */}
      
      <FilterSort
        {...props}
        selectedFilter={selectedFilter}
        selectedSort={selectedSort}
        />

      <RecordList
        {...props}
        selectedFilter={selectedFilter}
        selectedSort={selectedSort}
        />
    </React.Fragment>
  );
}

export default RecordListPage;