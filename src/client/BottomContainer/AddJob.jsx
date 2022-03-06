import React, { useState } from "react";

const AddJob = (props) => {
  const { jobs, setJobs } = props;
  const [displayForm, setDisplayForm] = useState(false);

  const submit = (e)=> {
    // prevent page refresh
    e.preventDefault();

    //consolidate state from form input
    const query = {
      company_name: document.getElementById('company-input').value,
      role_id: document.getElementById('role-input').value,
      url: document.getElementById('url-input').value
    };

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

  const form = <>
    <div>Form</div>
    <form className="CreateApp" onSubmit={(e) => submit(e)} >
      <input id="company-input" type="text" name="company-input" placeholder="company" />
      <input id="role-input" type="text" name="role-input" placeholder="role" />
      <input id="url-input" type="text" name="url-input" placeholder="url" />
      <input type="submit" value="Add Application"/>
    </form>
  </>

  return (
    <div>
      { displayForm ? <>
        <button onClick={() => setDisplayForm(false)}>Hide form</button>
        <div>{form}</div> 
      </>: 
        <button onClick={() => setDisplayForm(true)}>Show form</button>
      }
    </div>
  )
}

export default AddJob;
