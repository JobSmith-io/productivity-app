import React, { useState } from 'react';
import ListContainer from './ListContainer';
import Filter from './Filter';

function BottomContainer(props) {
  const { jobs, setJobs } = props;

  return (
    <div id="bottom-container" >
      <Filter />
      <ListContainer />
    </div>
  );
}

export default BottomContainer;
