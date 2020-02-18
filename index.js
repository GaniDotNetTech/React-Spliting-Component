import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Empolyee from '.../Components/Empolyee/EmpolyeeListComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  Changed=(event,id)=>{
const EmpIndex = this.state.Empolyees.findIndex(id);
const EmpolyeeData = EmpolyeeObject[EmpIndex];
const EmpolyeeObject = [...this.state.Empolyees];
EmpolyeeData.name = event.target.value;
EmpolyeeObject[EmpIndex] = EmpolyeeData;
this.setState({Empolyees:EmpolyeeObject})
  }
  state ={
Empolyees :[
{id:1,name :'A', Experience : 3},
{id:2,name :'A', Experience : 13},
{id:3,name :'C', Experience : 5},
{id:4,name :'D', Experience : 2},
],
ShowEmpolyee : false
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
        <Empolyee empolyee ={this.state.Empolyees} changed ={this.Changed}/>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
