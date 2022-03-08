import React, { useState } from 'react';
import JobExtended from './JobExtended';
import roleMap from '../roleMap';

function Job(props) {
  const { company_name, role_id } = props.job;
  const [isExtended, setIsExtended] = useState(props.job.isExtended);

  return (
    <tbody className="">
      <tr
        className="bg-gradient-to-t from-toBlue to-CsBlue"
        onClick={() => {
        setIsExtended(!isExtended);
        props.job.isExtended = !props.job.isExtyended;
      }}
      >
        <td>{company_name}</td>
        <td>{roleMap[role_id]}</td>
      </tr>
      
        {isExtended ? <JobExtended job={props.job} /> : null}
      
    </tbody>
  );
}

export default Job;
