import React from "react";
import DeleteButton from "./DeleteButton";

const Job = (props) => {
  const {company, role, url} = props.props;
  return (
    <>
      <div>{company}</div>
      <div>{role}</div>
      <div>{url}</div>
      <DeleteButton/>
    </>
  );
};

export default Job; 