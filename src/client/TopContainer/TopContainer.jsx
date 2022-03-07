import React, { useContext } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Header from './Header';
import { FilterContext, JobsContext } from '../Context/context';

ChartJS.register(ArcElement, Tooltip, Legend);


function TopContainer() {
  const [filters, setFilters] = useContext(FilterContext);
  const [jobs] = useContext(JobsContext);
  console.log("jobs", jobs)

  const companyData = jobs.reduce((acc, job) => {
    if (!acc[job.company_name]) Object.assign(acc, {[job.company_name]: 1 });
    else acc[job.company_name] += 1;
    return acc;
  }, {});

  console.log("companyData", companyData)
  const data = {
    labels: [...new Set(jobs.map((job) => job.company_name))],
    datasets: [
      {
        label: 'labels',
        data: [1,2,3,4,5,6,7],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
    options: {
      parsing: {
        xAxisKey: ''
      }
    },
  };

  return (
    <div id="top-container">
      <h1>Top Container</h1>
      <Header />
      <div>
      <Pie data={data} height="200px" width="200px" options={{ maintainAspectRatio: false }}/>
      </div>
      <div id="total-jobs" className="statField">Total Applications:</div>

      <button
        id="total-responses"
        className="statField"
        onClick={() => {
          setFilters((filters) => ({
            role_id: filters.role_id,
            responded: !filters.responded,
            interviewed: filters.interviewed,
            offered: filters.offered,
          }));
        }}
      >
        Total Responses:
        {' '}
        {filters.responded ? 'On' : 'Off'}
      </button>

      <button
        id="total-interviews"
        onClick={() => {
          setFilters((filters) => ({
            role_id: filters.role_id,
            responded: filters.responded,
            interviewed: !filters.interviewed,
            offered: filters.offered,
          }));
        }}
      >
        Total Interviews:
        {' '}
        {filters.interviewed ? 'On' : 'Off'}
      </button>

      <button
        id="total-offers"
        onClick={() => {
          setFilters((filters) => ({
            role_id: filters.role_id,
            responded: filters.responded,
            interviewed: filters.interviewed,
            offered: !filters.offered,
          }));
        }}
      >
        Total Offers:
        {' '}
        {filters.offered ? 'On' : 'Off'}
      </button>
    </div>
  );
}

export default TopContainer;
