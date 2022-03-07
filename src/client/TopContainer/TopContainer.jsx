import React, { useContext } from 'react';
import Header from './Header';
import { FilterContext } from '../Context/context';

function TopContainer() {
  const [filters, setFilters] = useContext(FilterContext);

  return (
    <div id="top-container">
      <h1>Top Container</h1>
      <Header />
      <div id="total-jobs" className="statField">Total Applications:</div>

      <button
        type="button"
        id="total-responses"
        className="statField bg-green sm:rounded"
        onClick={() => {
          setFilters((filters) => ({
            role_id: filters.role_id,
            responded: !filters.responded,
            interviewed: filters.interviewed,
            offered: filters.offered,
          }));
        }}
      >
        Total Responses:
        {' '}
        {filters.responded ? 'On' : 'Off'}
      </button>

      <button
        id="total-interviews"
        onClick={() => {
          setFilters((filters) => ({
            role_id: filters.role_id,
            responded: filters.responded,
            interviewed: !filters.interviewed,
            offered: filters.offered,
          }));
        }}
      >
        Total Interviews:
        {' '}
        {filters.interviewed ? 'On' : 'Off'}
      </button>

      <button
        id="total-offers"
        onClick={() => {
          setFilters((filters) => ({
            role_id: filters.role_id,
            responded: filters.responded,
            interviewed: filters.interviewed,
            offered: !filters.offered,
          }));
        }}
      >
        Total Offers:
        {' '}
        {filters.offered ? 'On' : 'Off'}
      </button>
    </div>
  );
}

export default TopContainer;
