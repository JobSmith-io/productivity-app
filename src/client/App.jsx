import React, { useState } from "react";
import BottomContainer from './BottomContainer/BottomContainer';
import TopContainer from './TopContainer/TopContainer';
import FilterContext from "./Context/FilterContext";


const App = () => {
  //hook to set state for job component to be rendered
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    role_id: 0,
    responded: false,
    interviewed: false,
    offered: false
  });

    return <div>
    <FilterContext.Provider value={[filters, setFilters]}>
      <TopContainer jobs={jobs}/>
      <BottomContainer jobs={jobs} setJobs={setJobs}/>
    </FilterContext.Provider>
    </div>;
  };

export default App; 