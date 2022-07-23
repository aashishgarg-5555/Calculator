import React from 'react'
import classes from "./Button.module.css"

function Buttons(props) {
  return (
    <div className={props.value == "C" || props.value == "=" ? `${classes.calcbutt} ${classes.res}` : `${classes.calcbutt}`} onClick={()=>props.handler(props.value)}>
    {props.value}
    </div>
  )
}

export default Buttons