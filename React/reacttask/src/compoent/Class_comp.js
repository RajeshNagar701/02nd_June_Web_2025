/*
Class Component
A class component must include the extends React.Component statement. 
This statement creates an inheritance to React.Component, and gives your component access 
to React.Component's functions.

The component also requires a render() method, this method returns HTML.

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

*/



//rce
/*

import React, { Component } from 'react'

export class Class_comp extends Component {
  render() {
    return (
      <div>Class_comp</div>
    )
  }
}

export default Class_comp

*/

//rcc
import React, { Component } from 'react'

export default class Class_comp extends Component {
  render() {
    return (
      <div>
         <h1>Class_comp</h1>
      </div>
    )
  }
}
