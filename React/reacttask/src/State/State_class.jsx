/*

React components has a built-in state object.

The state object is where you store property values that belong to the component.

When the state object changes, the component re-renders.

Creating the state Object
The state object is initialized in the constructor:

 constructor(){
    super();
    this.state={
        name:"Raj Nagar",
        number:1,
        isImage:true
    }

=============================================
Using the state Object

<h1>My {this.state.brand}</h1>

============================================

Changing the state Object
To change a value in the state object, use the this.setState() method.

this.setState({color: "blue"});

*/
import React, { Component } from 'react'
import Img_state from './Img_state';

export class State_class extends Component {

  constructor(){
    super();
    this.state={
        name:"Raj Nagar",
        number:1,
        isImage:true
    }
  }

  render() {
    return (
      <div>
        <button onClick={()=>this.setState({name:"Aakash Nagar"})}>Change</button>
        <h1>Hi My Name is: {this.state.name}</h1>
        
        <hr />

        <button onClick={()=>this.setState({number:this.state.number+1})}>+</button>
        <h1>{this.state.number}</h1>
        <button onClick={()=>this.setState({number:this.state.number-1})}>-</button>

        <hr />
        
        <button onClick={()=>this.setState({isImage:false})}>Hide</button>
        <button onClick={()=>this.setState({isImage:true})}>Show</button>
        <button onClick={()=>this.setState({isImage:!this.state.isImage})}>Toggle</button>
        {
            this.state.isImage? <Img_state/> : null    
        }
        
       <br />
       <br />
      </div>
    )
  }
}

export default State_class