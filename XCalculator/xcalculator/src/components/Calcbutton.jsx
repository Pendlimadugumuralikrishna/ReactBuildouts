import React from 'react'

function Calcbutton({val,handleClick}) {
  return (
    <button onClick={handleClick} name={val} value={val}>{val}</button>
  )
}

export default Calcbutton