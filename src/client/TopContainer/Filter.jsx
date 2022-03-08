import React, { useState, useContext } from 'react';
import { FilterContext } from '../Context/context';
import roleMap from '../roleMap';

function Filter() {
  const [displayFilter, setDisplayFilter] = useState(false);
  // NOTE: FilterContext has two elements [filters, setFilter] so we want the setFilter
  const setFilters = useContext(FilterContext)[1];

  const options = Object.keys(roleMap).map((num) => <option key={`roleFilter${num}`} value={num}>{roleMap[num]}</option>);

  // This adds an option to remove the filter
  options.unshift(<option key={`roleFilter${0}`} value={0}>job title</option>);

  const handleSelect = (e) => {
    setFilters((filters) => ({
      role_id: e.target.value,
      responded: filters.responded,
      interviewed: filters.interviewed,
      offered: filters.offered,
    }));
  };
  const dropDown = (
    <select className="ml-56" onChange={(e) => handleSelect(e)}>
      {options}
    </select>
  );

  return (
    <>
      <button type="button" className="bg-gradient-to-t from-header-blue to-dark-blue w-1/5 text-white inline rounded-full mr-1 px-2" onClick={() => setDisplayFilter(!displayFilter)}>Role</button>
      {displayFilter
        ? <form>{dropDown}</form>
        : null}
    </>
  );
}

export default Filter;
