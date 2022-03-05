import React from "react";
import DeleteButton from "./DeleteButton";

const Job = (props) => {
  const {company_name, role_id, url} = props.props;
  return (
    <>
      <div>{company_name}</div>
      <div>{role_id}</div>
      <div>{url}</div>
      <DeleteButton/>
    </>
  );
};

export default Job; 