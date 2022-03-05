import React, { useState } from "react";
import Form from "./Form";
import Job from './Job';


const ListContainer = () => {
  const [jobs, setJobs] = useState([{applicationId:0, company: "amazon", role: "senior software engineer", url: "www.yello.com"}]);

  const getData = ()=> {
    const fakeData = [{applicationId: 1, company: "google", role: "software engineer", url: "www.hello.com"}]; 
    setJobs([[...jobs], fakeData]);
    console.log('getData invoked!')
  }

  getData();
  // get request func for fetching the jobs from the database
  // deconstruct {application_id, company, role, url } =data 
  const jobsObj = jobs.map((job)=> {
      return <Job key= {jobs.applicationId} props={jobs}/>
  });
    // populate jobs with 
  return (
    <div>
    <Form/>


    {/* unique key from application_id */}
      {jobsObj}
  </div>
  );
}
export default ListContainer; 