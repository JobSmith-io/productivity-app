import React from "react";

{/* <label Htmlfor="company">Company</label>
<input type="text" name="company" value={} /> */}

const Form = () => {
    
const submit = ()=> {
    //post request
    console.log('submit');
}
  
  return (
    <>
      <form className="CreateApp" onSubmit={submit} >
          <label Htmlfor="company">Company</label>
          <input type="text" name="company" value={"hello"} />
          <label Htmlfor="role">role</label>
          <input type="text" name="role" value={"yoo"} />
          <label Htmlfor="date">date</label>
          <input type="text" name="date" value={"nahh"} />
          <label Htmlfor="url">url</label>
          <input type="text" name="url" value={"turtle"} />
          <input type="submit" value="submit"/>
      </form>
      
    </>
  );
};

export default Form; 