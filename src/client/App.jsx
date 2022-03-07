import React, { useState } from 'react';
import BottomContainer from './BottomContainer/BottomContainer';
import TopContainer from './TopContainer/TopContainer';
import { FilterContext, JobsContext } from './Context/context';
import Filter from './BottomContainer/Filter';

function App() {
  // hook to set state for job component to be rendered
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    role_id: 0,
    responded: false,
    interviewed: false,
    offered: false,
  });

  return (
    <div className="bg-white">
      <JobsContext.Provider value={[jobs, setJobs]}>
        <FilterContext.Provider value={[filters, setFilters]}>
          <TopContainer />
          <BottomContainer />
        </FilterContext.Provider>
      </JobsContext.Provider>
    </div>
  );
}

export default App;
