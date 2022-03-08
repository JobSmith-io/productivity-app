import React, { useContext } from 'react';
import { JobsContext } from '../Context/context';

function JobExtended(props) {
  const {
    _id, responded, interviewed, offered, url
  } = props.job;
  const setJobs = useContext(JobsContext)[1];

  const deleteRow = (id) => {
    fetch(`/api/application/${_id}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then((data) => {
        // Remove the deleted document from jobs
        setJobs((jobs) => jobs.filter((job) => job._id !== _id));
      })
      .catch((err) => console.log('err in deleteRow: ', err));
  };

  const onChange = (e) => {
    const query = {
      responded,
      interviewed,
      offered,
    };

    console.log('before switch:', query);

    switch (e.target.name) {
      case 'responded':
        query.responded = (!responded);
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

    fetch(`api/application/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query),
    })
      .then((res) => res.json())
      .then((data) => setJobs((jobs) => jobs.filter((job) => job._id != _id).concat([data.application])))
      .catch((err) => console.log('err modifying application:', err));
  };

  // How should we allow the user to update fields?
  return (
    <>
      <tr className="bg-gradient-to-t from-white to-CsBlue">
        <td className="bg-gradient-to-t from-white to-CsBlue">
          <a className=" pl-2" href={url} target="_blank">link</a>
        </td>
        <td className="">
          <label className="mr-1 pl-2" htmlFor="Responded">Responded</label>
          <input type="checkbox" name="responded" onChange={(e) => onChange(e)} checked={responded} />
        </td>
      </tr>
      <tr className="">
        <td className="">
          <label className="mr-1 pl-2" htmlFor="Interviewed">Interviewed</label>
          <input type="checkbox" name="interviewed" onChange={(e) => onChange(e)} checked={interviewed} />
        </td>
        <td className="">
          <label className="mr-1 pl-2" htmlFor="Offered">Offered</label>
          <input type="checkbox" name="offered" onChange={(e) => onChange(e)} checked={offered} />
        </td>
      </tr>
      <tr className="bg-gradient-to-t from-white to-CsBlue">
        <td className="bg-white">
          <button className="w-4/7 bg-red text-white ml-2 mb-1 px-3 rounded" type="button" onClick={() => deleteRow(props)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default JobExtended;
