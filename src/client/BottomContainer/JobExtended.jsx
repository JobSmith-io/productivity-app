import React from 'react';

const JobExtended = (props) => {
  let { _id, responded, interviewed, offered} = props.job;
  const { setJobs } = props;

  const deleteRow = (id)=> {
    fetch('/api/application/' + _id, {method: 'DELETE'})
      .then(res => res.json())
      .then(data => {
        // Remove the deleted document from jobs
        setJobs((jobs) => jobs.filter(job => job._id !== _id))
      })
      .catch(err => console.log('err in deleteRow: ', err));
  };

  const onChange = (e) => {

    const query = {
      responded,
      interviewed,
      offered
    }

    console.log('before switch:', query);

    switch (e.target.name) {
      case 'responded':
        query.responded = (responded ? false : true);
        break;
      case 'interviewed':
        query.interviewed = !interviewed;
        break;
      case 'offered':
        query.offered = !offered;
        break;
      case 'document_id':
        break;
    }

    console.log('after switch:', query);

    fetch('api/application/' + _id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query)
    })
      .then(res => res.json())
      .then(data => setJobs((jobs) => jobs.filter((job)=> job._id != _id).concat([data.application])))
      .catch(err => console.log('err modifying application:', err))
  }

  // How should we allow the user to update fields?
  return (
    <td className='job-extension'>
      <label htmlFor="Responded">Responded</label>
      <input type="checkbox" name="responded" onChange={(e)=> onChange(e)} checked={responded}/><br></br>
      <label htmlFor="Interviewed">Interviewed</label>
      <input type="checkbox" name="interviewed" onChange={(e)=> onChange(e)} checked={interviewed}/><br></br>
      <label htmlFor="Offered">Offered</label>
      <input type="checkbox" name="offered" onChange={(e)=> onChange(e)} checked={offered}/><br></br>

      <button onClick={() => deleteRow(props)}>X</button>
    </td>
  );
}

export default JobExtended;
