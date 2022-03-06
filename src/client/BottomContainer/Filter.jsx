import React, { useState } from "react";

const Filter = () => {
  const [displayFilter, setDisplayFilter ] = useState(false)

  const dropDown = <div>
    <p>Filter1</p>
    <p>Filter2</p>
    <p>Filter3</p>
    <p>Filter4</p>
    <p>Filter5</p>
  </div>

  return (
    <>
      <div onClick={() => setDisplayFilter(!displayFilter)}>filter</div>
      { displayFilter ? 
        <div>{dropDown}</div> : 
        null
      }
    </>
  )
}

export default Filter; 