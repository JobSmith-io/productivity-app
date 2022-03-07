import React, { useState } from 'react';
import JobExtended from './JobExtended';
import roleMap from '../roleMap';

function Job(props) {
  const { company_name, role_id } = props.job;
  const [isExtended, setIsExtended] = useState(props.job.isExtended);

  return (
    <tbody>
      <tr onClick={() => {
        setIsExtended(!isExtended);
        props.job.isExtended = !props.job.isExtended;
      }}
      >
        <td>{company_name}</td>
        <td>{roleMap[role_id]}</td>
      </tr>
      <tr>
        {isExtended ? <JobExtended job={props.job} /> : null}
      </tr>
    </tbody>
  );
}

export default Job;
