import React from 'react'
import Empolyee from '../Components/Empolyee/EmpolyeeComponent'

const EmpolyeeList =(props) =>{
  props.empolyee.map((person)=>{
    return(
      <Empolyee EmpolyeeName = {person.EmpolyeeName}   ClassName={person.ClassName} changed = {props.changed(event,person.id)} value={person.value}/>
    );
  })

}
export default EmpolyeeList