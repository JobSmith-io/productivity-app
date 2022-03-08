import React, { useContext } from 'react';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Header from './Header';
import { FilterContext, JobsContext } from '../Context/context';
import charColors from './ChartColors';
import Filter from './Filter';

ChartJS.register(ArcElement, Tooltip, Legend);

function TopContainer() {
  const [filters, setFilters] = useContext(FilterContext);
  const [jobs] = useContext(JobsContext);
  console.log('jobs', jobs);

  const jobFiltered = jobs.filter((job) => {
    for (const key in filters) {
      if (filters[key] != 0 && job[key] != filters[key]) return false;
    }
    return true;
  });

  const companyData = jobFiltered.reduce((acc, job) => {
    if (!acc[job.company_name]) Object.assign(acc, { [job.company_name]: 1 });
    else acc[job.company_name] += 1;
    return acc;
  }, {});

  console.log('companyData', companyData);
  const data = {
    labels: Object.keys(companyData),
    datasets: [
      {
        label: 'labels',
        data: Object.values(companyData),
        backgroundColor: charColors[0],
        borderColor: charColors[1],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'left',
      },
    },
  };

  const btnResponse = !filters.responded ? 'bg-gradient-to-t from-header-blue to-dark-blue text-white rounded-full mr-1 px-3' : 'bg-gradient-to-t from-gray to-50 text-dark rounded-full mr-1 px-3';

  const btnInterviewed = !filters.interviewed ? 'bg-gradient-to-t from-header-blue to-dark-blue text-white rounded-full mr-1 px-3' : 'bg-gradient-to-t from-gray to-50 text-dark rounded-full mr-1 px-3';

  const btnOffered = !filters.offered ? 'bg-gradient-to-t from-header-blue to-dark-blue text-white rounded-full mr-1 px-3' : 'bg-gradient-to-t from-gray to-50 text-dark rounded-full mr-1 px-3';

  return (
    <div id="top-container" className="mb-2 items-stretch">
      <Header />
      <div>
        <Pie data={data} options={options} height="200px" width="200px" />
      </div>

      <div id="total-jobs" className="statField ml-48">
        Applications:
        {' '}
        {jobFiltered.length}
      </div>
      <div className='bg-gradient-to-t from-CsBlue to-white'>
        <button
          type="button"
          id="total-responses"
          className={btnResponse}
          onClick={() => {
            setFilters((filters) => ({
              role_id: filters.role_id,
              responded: !filters.responded,
              interviewed: filters.interviewed,
              offered: filters.offered,
            }));
          }}
        >
          Responses
        </button>
        <button
          type="button"
          className={btnInterviewed}
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
          Interviews
        </button>
        <button
          type="button"
          className={btnOffered}
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
          Offers
        </button>
        <Filter />
      </div>
    </div>
  );
}

export default TopContainer;
