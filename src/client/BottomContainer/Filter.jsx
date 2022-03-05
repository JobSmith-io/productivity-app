import React from "react";

const Filter = () => {
  const submit = ()=> {
    console.log('submit');
  }
  return (
    <>
    <div>Filter</div>
    <form className="filter" onSubmit={submit} >
        <label htmlFor="company">Company</label>
        <input type="text" name="company" value={"hello"} />
        <label htmlFor="role">role</label>
        <input type="text" name="role" value={"yoo"} />
        <input type="submit" value="submit"/>
    </form>
    </>
  )
};

export default Filter; 