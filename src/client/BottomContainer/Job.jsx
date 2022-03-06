import React, { useState } from "react";
import JobExtended from './JobExtended'

const Job = (props) => {
  const { company_name, role_id, url } = props.job;
  const { jobs, setJobs } = props;
  const [isExtended, setIsExtended] = useState(false);

  return (
    <>
      <tbody onClick={() => setIsExtended(!isExtended)}>
        <tr>
          <td>{company_name}</td>
          <td>{role_id}</td>
          <td>{url}</td>
          {isExtended ? <JobExtended job={props.job} jobs={jobs} setJobs={setJobs} /> : null}
        </tr>
      </tbody>
      
    </>
  );
};

export default Job; 