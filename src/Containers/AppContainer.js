import AppPage from '../Components/Pages/AppPage';
import { Container } from 'flux/utils';
import RecordStore from '../Data/Record/RecordStore';
import RecordActions from '../Data/Record/RecordActions';
import FilterSortStore from '../Data/FilterSort/FilterSortStore';
import FilterSortActions from '../Data/FilterSort/FilterSortActions';

function getStores() {
  return [
    RecordStore,
    FilterSortStore,
  ];
}

function getState() {
  return {
    records: RecordStore.getState(),
    onAddRecord: RecordActions.addRecord,
    onUpdateRecord: RecordActions.updateRecord,
    onDeleteRecord: RecordActions.deleteRecord,
    onToggleRecord: RecordActions.toggleRecord,

    filterSort: FilterSortStore.getState(),
    onSetFilter: FilterSortActions.setFilter,
    onSetSort: FilterSortActions.setSort
  };
}

export default Container.createFunctional(AppPage, getStores, getState);