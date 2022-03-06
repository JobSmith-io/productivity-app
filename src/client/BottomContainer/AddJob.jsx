import React, { useState } from "react";
import roleMap from "../roleMap";

const AddJob = (props) => {
  // Passed down set state function due to possible closure with function refering to state in container
  const { setJobs } = props;
  // click -handler set state to display form 
  const [displayForm, setDisplayForm] = useState(false);

  const submit = (e)=> {
    // prevent page refresh
    e.preventDefault();
    
    const company_name = document.getElementById('company-input');
    const role_id = document.getElementById('role-input');
    const url = document.getElementById('url-input');

    //consolidate state from form input
    const query = { company_name: company_name.value, role_id: role_id.value, url: url.value };
    //clear input for form after submit is invoked
    
    company_name.value = '' ;
    role_id.value = '';
    url.value  = '';

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
        setJobs((jobs) =>[...jobs, res.application])
      })
      .catch((err) => console.log("error in post add application: ", err))
  };

  //TODO: deal with department
  const options = Object.keys(roleMap).map((num) => <option key={`option${num}`} value={num}>{roleMap[num]}</option>)

  const form = <>
    <div>Form</div>
    <form className="CreateApp" onSubmit={(e) => submit(e)} >
      <input id="company-input" type="text" name="company-input" placeholder="company" />
      <select id="role-input" name="role-input" placeholder="role">
        {options}
      </select>
      <input id="url-input" type="text" name="url-input" placeholder="url" />
      <input type="submit" value="Add Application"/>
    </form>
  </>

  // conditional to render form upon state change
  return (
    <div>
      { displayForm ? 
      <>
        <button onClick={() => setDisplayForm(false)}>Hide form</button>
        <div>{form}</div> 
      </>: 
        <button onClick={() => setDisplayForm(true)}>Show form</button>
      }
    </div>
  )
}

export default AddJob;
