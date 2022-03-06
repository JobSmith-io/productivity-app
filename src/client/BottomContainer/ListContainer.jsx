import React, { useEffect, useState } from 'react';
import Job from './Job';


const ListContainer = () => {
  //hook to set state for job component to be rendered
  const [jobs, setJobs] = useState([]);
  
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
      .then((data) => {
        setJobs(data.allApplications)
      })
      .catch(err => console.log("inside getall ", err))
  };

  const submit = (e)=> {
    // prevent page refresh
    e.preventDefault();

    //consolidate state from form input
    const query = {
        company_name: queryCompany,
        role_id: queryRole,
        url: queryURL
      };

    console.log()
    //post request
    fetch("/api/application", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query)
    })
      .then(res => res.json())
      .then(res => {
        setJobs([...jobs, res.application])
        console.log(jobs)
      })
      .catch((err) => console.log("error in post add application: ", err))
  };

  useEffect(()=> {
    getData();
  },[]); 

  // delete an entry on the table 
  // const deleteEntry = (id)=> {
  //     console.log('user wants this id deleted', id);
  //     //setJobs([...jobs].filter(obj=> obj.applicationId !== id))
  // };

  // get request func for fetching the jobs from the database
  // deconstruct {application_id, company, role, url } =data 
  const jobsObj = jobs.map((job)=> {
      return <Job key={`v${job._id}`} jobs={jobs} setJobs={setJobs} props={job}/>
  });
    // populate jobs with 
  return (
    <div>
    <div>Form</div>
      <form className="CreateApp" onSubmit={(e) => submit(e)} >
      <input type="text" name="company-input" placeholder="company" onChange={(e)=> {setQueryCompany(e.target.value)}}/>
      <input type="text" name="role-input" placeholder="role" onChange={(e)=> {setQueryRole(e.target.value)}}/>
      <input type="text" name="url-input" placeholder="url" onChange={(e)=> {setQueryURL(e.target.value)}}/>
      <input type="submit" value="Add Application"/>
    </form> 
    {/* <Filter/> */}
    {/* unique key from application_id */}
    <table> 
        <thead> 
      <tr className="columnHeader">
    <th>Company</th>
    <th>Role</th>
    <th>Url</th>
    </tr> 
    </thead>
    {jobsObj}
    </table> 
  </div>
  );
}
export default ListContainer; 