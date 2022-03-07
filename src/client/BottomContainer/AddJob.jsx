import React, { useState, useContext } from 'react';
import roleMap from '../roleMap';
import { JobsContext } from '../Context/context';

function AddJob(props) {
  // Passed down set state function due to possible closure with function refering to state in 
  // container
  const setJobs = useContext(JobsContext)[1];
  // click -handler set state to display form
  const [displayForm, setDisplayForm] = useState(false);

  const submit = (e) => {
    // prevent page refresh
    e.preventDefault();

    const company_name = document.getElementById('company-input');
    const role_id = document.getElementById('role-input');
    const url = document.getElementById('url-input');

    // consolidate state from form input
    const query = { company_name: company_name.value, role_id: role_id.value, url: url.value };
    // clear input for form after submit is invoked

    company_name.value = '';
    role_id.value = '';
    url.value = '';

    // post request
    fetch('/api/application', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query),
    })
      .then((res) => res.json())
      .then((res) => {
        setJobs((jobs) => [...jobs, res.application]);
      })
      .catch((err) => console.log('error in post add application: ', err));
  };

  // TODO: deal with department
  const options = Object.keys(roleMap).map((num) => <option key={`option${num}`} value={num}>{roleMap[num]}</option>);

  const form = (
    <>
      <div>Form</div>
      <form className="CreateApp" onSubmit={(e) => submit(e)}>
        <input id="company-input" type="text" name="company-input" placeholder="company" />
        <select id="role-input" name="role-input" placeholder="role">
          {options}
        </select>
        <input id="url-input" type="text" name="url-input" placeholder="url" />
        <input type="submit" value="Add Application" />
      </form>
    </>
  );

  // conditional to render form upon state change
  return (
    <div class="flex">
      {displayForm
        ? (
          <>
            <button type="button" className="bg-gradient-to-t from-gray to-50 font-bold w-10 h-10 text-white rounded-full my-2 mx-auto inline" onClick={() => setDisplayForm(false)}>-</button>
            <div>{form}</div>
          </>
        )
        : <button type="button" className="bg-gradient-to-t from-bc1 to-bc2 font-bold w-10 h-10 text-white rounded-full my-2 mx-auto mx-auto inline" onClick={() => setDisplayForm(true)}>+</button>}
    </div>
  );
}

export default AddJob;
