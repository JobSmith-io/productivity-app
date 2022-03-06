import React from 'react';

const JobExtended = (props) => {
  const { _id, responded, response_date, interview_id, offer_id, application_date, document_id, user_id } = props.job;
  const { jobs, setJobs } = props;

  const deleteRow = (id)=> {
    console.log("delete application", _id)

    fetch('/api/application/' + _id, {method: 'DELETE'})
      .then(res => res.json())
      .then(data => {
        // Remove the deleted document from jobs
        setJobs(jobs.filter(job => job._id !== _id))
      })
      .catch(err => console.log('err in deleteRow: ', err));
  };

  // How should we allow the user to update fields?
  return (
    <td className='job-extension'>
      <p>responded: {responded}</p>
      <p>response date: {response_date}</p>
      <p>interview id: {interview_id}</p>
      <p>offer id: {offer_id}</p>
      <p>application date: {application_date}</p>
      <p>document id: {document_id}</p>
      <p>user id: {user_id}</p>
      <button onClick={() => deleteRow(props)}>X</button>
    </td>
  );
}

export default JobExtended;
