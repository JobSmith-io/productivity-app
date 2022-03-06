import React from "react";
import DeleteButton from "./DeleteButton";

const Job = (props) => {
  const {company_name, role_id, url } = props.props;
  console.log(props);
  // calls deleteEntry  in ListContainer 
  // const callDeleteRow = (id)=> {
  //   deleteEntry(id);
  //   console.log('in callDeleteRow '); 
  // }

  // deleteRow
  const deleteRow = (id)=> {
    console.log("delete application")
  };

  return (
    <>
      <tbody>
    <tr>
    <td>{company_name}</td>
    <td>{role_id}</td>
    <td>{url}</td>
    <td><button >X</button></td> 
    </tr>
      </tbody>
      
    </>
  );
};

export default Job; 