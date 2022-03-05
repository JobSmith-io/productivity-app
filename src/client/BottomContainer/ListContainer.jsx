import React, { useEffect, useState } from "react";
import Form from "./Form";
import Job from './Job';
import Filter from './Filter';

const ListContainer = () => {
  const [jobs, setJobs] = useState([]);
  const getData = ()=> {
    const fakeData = [{applicationId: 1, company: "google", role: "software engineer", url: "www.hello.com"}, {applicationId:0, company: "amazon", role: "senior software engineer", url: "www.yello.com"}]; 
    setJobs(fakeData);
    console.log('getData invoked!')
  }

  useEffect(()=> {
    getData();
  },[]); 
  
  // get request func for fetching the jobs from the database
  // deconstruct {application_id, company, role, url } =data 
  const jobsObj = jobs.map((job)=> {
      return <Job key={job.applicationId} props = {job}/>
  });
    // populate jobs with 
  return (
    <div>
    <Filter/>
    <Form/>


    {/* unique key from application_id */}
    {jobsObj}
  </div>
  );
}
export default ListContainer; 