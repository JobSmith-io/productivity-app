import React from "react";
import DeleteButton from "./DeleteButton";

const Job = (props) => {
  const {company, role, url, applicationId, deleteEntry } = props.props;
  console.log(props);
  // calls deleteEntry  in ListContainer 
  const callDeleteRow = (id)=> {
    deleteEntry(id);
    console.log('in callDeleteRow '); 
  }

  return (
    <>
    <tr>
    <td>{company}</td>
    <td>{role}</td>
    <td>{url}</td>
    </tr>
      <DeleteButton onClick={callDeleteRow(applicationId)} />
    </>
  );
};

export default Job; 