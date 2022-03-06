import React from "react";

const Job = (props) => {
  const { _id, company_name, role_id, url } = props.props;
  const { jobs, setJobs } = props;
  // calls deleteEntry  in ListContainer 
  // const callDeleteRow = (id)=> {
  //   deleteEntry(id);
  //   console.log('in callDeleteRow '); 
  // }
  // deleteRow
  const deleteRow = (id)=> {
    console.log("delete application", props.props._id)

    fetch('/api/application/' + _id, {method: 'DELETE'})
      .then(res => res.json())
      .then(data => {
        // Remove the deleted document from jobs
        setJobs(jobs.filter(job => job._id !== _id))
      })
      .catch(err => console.log('err in deleteRow: ', err));
  };

  return (
    <>
      <tbody>
        <tr>
          <td>{company_name}</td>
          <td>{role_id}</td>
          <td>{url}</td>
          <td><button onClick={() => deleteRow(props)}>X</button></td> 
        </tr>
      </tbody>
      
    </>
  );
};

export default Job; 