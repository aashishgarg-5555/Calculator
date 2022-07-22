import React,{useState} from 'react'
import classes from "./Outer.module.css"
import Buttons from './Buttons'

function Outer() {

  const [res, setRes] = useState("")


  const butt = ["C","9","/","8","7","6","*","5","4","3","+","2","1","0","-",".","Del","="]; 
  
  const findval=()=>{
    let result = Function("return "+res)();
    setRes(result.toString());
  }

  const handler=(arg)=> {

    if(res=="Infinity"){
      setRes("");
      return;
    }

     if(arg=="C") setRes("");
     else if(arg == "=") findval();
     else if(arg == "Del"){
       let n = res.length;
       if(n>0)
       setRes(res.slice(0,n-1));
     }
     else setRes(res.concat(arg))

  }

  return (
    <div className={classes.outer}>
      <div className={classes.inner}>
        <div className={classes.result}>
          <div className={classes.resbox}>
            {res}  
          </div>
        </div>
        <div className={classes.btns}>
            {butt.map((ele,index)=>{return <Buttons handler={handler} value ={ele} key={index}/>})}
        </div>
      </div>
    </div>
  )
}

export default Outer