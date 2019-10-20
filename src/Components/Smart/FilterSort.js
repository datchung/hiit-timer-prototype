import React from 'react';
import FilterSortSimple from '../Simple/FilterSortSimple';

function FilterSort(props) {
  function onFilter(event) {
    props.onSetFilter(event.target.value);
  }

  function onSort(event) {
    props.onSetSort(event.target.value);
  }

  return (
    <FilterSortSimple 
      {...props} 
      selectedFilter={props.selectedFilter}
      selectedSort={props.selectedSort}
      onFilter={onFilter} 
      onSort={onSort} 
      />
  );
}

export default FilterSort;