import React from "react";
import Filter from './Filter';
import AddButton from './AddButton';
import ListContainer from "./ListContainer";

const BottomContainer = () => {
    return <div>
      <h1>Bottom Container</h1>
      <Filter/>
      <AddButton/>
      <ListContainer/>
    </div>;
  };

export default BottomContainer;  