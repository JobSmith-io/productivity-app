import React from "react";

{/* <label htmlFor="company">Company</label>
<input type="text" name="company" value={} /> */}

const Form = () => {
    
const submit = ()=> {
    //post request
    console.log('submit');
}
  
  return (
    <>
      <form className="CreateApp" onSubmit={submit} >
          <label htmlFor="company">Company</label>
          <input type="text" name="company" value={"hello"} />
          <label htmlFor="role">role</label>
          <input type="text" name="role" value={"yoo"} />
          <label htmlFor="date">date</label>
          <input type="text" name="date" value={"nahh"} />
          <label htmlFor="url">url</label>
          <input type="text" name="url" value={"turtle"} />
          <input type="submit" value="submit"/>
      </form>
      
    </>
  );
};

export default Form; 