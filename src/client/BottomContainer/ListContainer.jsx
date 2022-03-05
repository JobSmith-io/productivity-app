import React, { useEffect, useState } from "react";
import Job from './Job';
import Filter from './Filter';

const ListContainer = () => {
  //hook to set state for job component to be rendered
  const [jobs, setJobs] = useState([]);
  //hook to update query from form component to be passed into getData
  const [query, setQuery] = useState({});
  const [queryCompany, setQueryCompany] = useState("")
  const [queryRole, setQueryRole] = useState("")
  const [queryURL, setQueryURL] = useState("")

  //query to fetch data
  const getData = ()=> {
    // const fakeData = [{applicationId: 1, company: "google", role: "software engineer", url: "www.hello.com"}, {applicationId:0, company: "amazon", role: "senior software engineer", url: "www.yello.com"}]; 
    // setJobs(fakeData);
    // console.log('getData invoked!')
    fetch("api/application")
      .then(res => res.json())
      .then((data) => setJobs(data))
      .catch(console.log("error in getdata"))
  };

  const submit = ()=> {
    //consolidate state from form input
    setQuery(
      {
        company_name: queryCompany,
        role_id: queryRole,
        url: queryURL
      })
    //post request
    fetch("/api/application", {
      method: 'POST',
      body: JSON.stringify(query)
    })
      .then(res => res.json())
      .then(res => {
        setJobs([...jobs, res.locals.user])
      })
      .catch(console.log("error in post add application"))
  };

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
    <div>Form</div>
      <form className="CreateApp" onSubmit={submit} >
      <input type="text" name="company-input" placeholder="company" onChange={(e)=> {setQueryCompany(e.target.value)}}/>
      <input type="text" name="role-input" placeholder="role" onChange={(e)=> {setQueryRole(e.target.value)}}/>
      <input type="text" name="url-input" placeholder="url" onChange={(e)=> {setQueryURL(e.target.value)}}/>
      <input type="submit" value="Add Application"/>
    </form> 
    {/* <Filter/> */}
    {/* unique key from application_id */}
    {jobsObj}
  </div>
  );
}
export default ListContainer; 