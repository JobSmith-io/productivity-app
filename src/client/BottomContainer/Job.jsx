import React from "react";
import DeleteButton from "./DeleteButton";

const Job = (props) => {
  // const {company, role, url} = props.props;
  console.log(props); 
  const deleteEntry = (id)=> {
    console.log('delete'); 
  }

  return (
    <>
    <tr>
    <td>{props.company}</td>
    <td>{props.role}</td>
    <td>{props.url}</td>
    </tr>
      <DeleteButton onClick={deleteEntry(props.applicationId)} />
    </>
  );
};

export default Job; 