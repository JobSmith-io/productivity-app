import React from "react";
import Filter from './Filter'
import ListContainer from "./ListContainer";

const BottomContainer = () => {
    return (
      <div id="bottom-container">
        <h1>Bottom Container</h1>
        <Filter />
        <ListContainer/>
      </div>
    );
  };

export default BottomContainer;
