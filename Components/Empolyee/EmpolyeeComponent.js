import React from 'react'
const Empolyee =(props) =>{
return(
  <div className={props.ClassName}>
    <h1>{props.EmpolyeeName}</h1>
    <input type ='text' onChange = {props.changed} value ={props.value}/>
  </div>
);

}
export default Empolyee