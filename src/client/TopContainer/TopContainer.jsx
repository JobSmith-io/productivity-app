import React, { useContext } from "react";
import Header from "./Header"
import FilterContext from "../Context/FilterContext";

const TopContainer = () => {
  const [filters, setFilters] = useContext(FilterContext)
  
  return <div id="top-container">
    <h1>Top Container</h1>
    <Header />
    <div id="total-jobs" className="statField">Total Applications:</div>

    <button id="total-responses" className="statField" onClick={() => {
      setFilters((filters) => {
        return {
          role_id: filters.role_id,
          responded: !filters.responded,
          interviewed: filters.interviewed,
          offered: filters.offered
        }
      })
    }}>Total Responses: {filters.responded ? "On" : "Off"}</button>
    
    <button id="total-interviews" onClick={() => {
      setFilters((filters) => {
        return {
          role_id: filters.role_id,
          responded: filters.responded,
          interviewed: !filters.interviewed,
          offered: filters.offered
        }
      })
    }}>Total Interviews: {filters.interviewed ? 'On' : 'Off'}</button>

    <button id="total-offers" onClick={() => {
      setFilters((filters) => {
        return {
          role_id: filters.role_id,
          responded: filters.responded,
          interviewed: filters.interviewed,
          offered: !filters.offered
        }
      })
    }}>Total Offers: {filters.offered ? 'On' : 'Off'}</button>
  </div>;
};

export default TopContainer; 