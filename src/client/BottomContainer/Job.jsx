import React from "react";
import DeleteButton from "./DeleteButton";

const Job = (props) => {
  const {company, role, url, applicationId } = props.props;
  console.log(props); 
  const deleteEntry = (id)=> {
    console.log('delete'); 
  }

  return (
    <>
    <tr>
    <td>{company}</td>
    <td>{role}</td>
    <td>{url}</td>
    </tr>
      <DeleteButton onClick={deleteEntry(applicationId)} />
    </>
  );
};

export default Job; 