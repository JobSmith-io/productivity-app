import React, { useState } from "react";
import ListContainer from "./ListContainer";
import Filter from './Filter';

const BottomContainer = (props) => {
  const { jobs, setJobs } = props;

  return (
    <div id="bottom-container">
      <h1>Bottom Container</h1>
      <Filter/>
      <ListContainer jobs={jobs} setJobs={setJobs} />
    </div>
  );
};

export default BottomContainer;
