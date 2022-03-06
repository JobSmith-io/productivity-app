import React, { useState } from "react";
import JobExtended from './JobExtended'
import roleMap from "../roleMap";

const Job = (props) => {
  const { company_name, role_id, url } = props.job;
  const { setJobs } = props;
  const [isExtended, setIsExtended] = useState(props.job.isExtended);

  return (
    <>
      <tbody>
        <tr onClick={() => {
          setIsExtended(isExtended ? false : true);
          props.job.isExtended = props.job.isExtended ? false : true;
        }}>
          <td>{company_name}</td>
          <td>{roleMap[role_id]}</td>
          <td>{url}</td>
        </tr>
        <tr>
          {isExtended ? <JobExtended job={props.job} setJobs={setJobs} /> : null}
        </tr>
      </tbody>
      
    </>
  );
};

export default Job; 