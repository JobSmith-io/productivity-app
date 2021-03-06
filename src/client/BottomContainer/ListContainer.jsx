import React, { useEffect, useState, useContext } from 'react';
import AddJob from './AddJob';
import Job from './Job';
import { FilterContext, JobsContext } from '../Context/context';

function ListContainer(props) {
  const filters = useContext(FilterContext)[0];
  const [jobs, setJobs] = useContext(JobsContext);
  // query to fetch data
  const getData = () => {
    // const fakeData = [{applicationId: 1, company: "google", role: "software engineer", url: "www.hello.com"}, {applicationId:0, company: "amazon", role: "senior software engineer", url: "www.yello.com"}];
    // setJobs(fakeData);
    // console.log('getData invoked!')
    fetch('api/application')
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.allApplications);
      })
      .catch((err) => console.log('inside getall ', err));
  };

  useEffect(() => {
    getData();
  }, []);

  const jobFiltered = jobs.filter((job) => {
    for (const key in filters) {
      if (filters[key] != 0 && job[key] != filters[key]) return false;
    }
    return true;
  });

  const jobsObj = jobFiltered.sort((a, b) => a._id - b._id).map((job) => <Job key={`v${job._id}`} job={job} />);

  const columnHeader = (
    <thead>
      <tr className='bg-gradient-to-t from-header-blue to-dark-blue text-white'>
        <th>Company</th>
        <th>Role</th>
      </tr>
    </thead>
  );

  return (
    <>
    <AddJob />
    <div id="list-container">
      <table className='mx-auto mt-2 w-full text-left border border-slate-500'>
        {columnHeader}
        {jobsObj}
      </table>
    </div>
    </>
  );
}
export default ListContainer;
