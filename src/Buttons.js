import React from 'react'
import classes from "./Button.module.css"

function Buttons({value,handler}) {
  return (
    <div className={value == "C" || value == "=" ? `${classes.calcbutt} ${classes.res}` : `${classes.calcbutt}`} onClick={()=>handler(value)}>
    {value}
    </div>
  )
}

export default Buttons