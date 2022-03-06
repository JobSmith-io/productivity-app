import React, { useEffect, useState } from 'react';
import AddJob from './AddJob';
import Job from './Job';


const ListContainer = () => {
  //hook to set state for job component to be rendered
  const [jobs, setJobs] = useState([]);
  // const [displayForm, setDisplayForm] = useState(false);
  
  // const [queryCompany, setQueryCompany] = useState("")
  // const [queryRole, setQueryRole] = useState("")
  // const [queryURL, setQueryURL] = useState("")

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
      return <Job key={`v${job._id}`} jobs={jobs} setJobs={setJobs} job={job}/>
  });

  const columnHeader = <thead> 
    <tr className="columnHeader">
    <th>Company</th>
    <th>Role</th>
    <th>Url</th>
    </tr> 
  </thead>

  return (
    <div id="list-container">
      <AddJob jobs={jobs} setJobs={setJobs}/>
      <table> 
        {columnHeader}
        {jobsObj}
      </table> 
    </div>
  );
}
export default ListContainer; 