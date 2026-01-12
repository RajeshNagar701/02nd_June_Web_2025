/*

React components has a built-in state object.

React is mutable state object

The state object is where you store property values that belong to the component.

When the state object changes, the component re-renders.

The React useState Hook allows us to track state in a function component.

Import useState

We initialize our state by calling useState in our function component.
useState accepts an initial state and returns two values:

The current state.
A function that updates the state.

var [name,setName]=usestate("Rajesh nagar");
{name}


var [mydata,setMydata]=usestate({
        id:"1",
        name:"Rajesh nagar",
        age:33,
        mobile:31548799
});

{mydata.name}

*/


import React, { useState } from 'react'
import Img_state from './Img_state';

function State_func() {
  
  const [name,setName]=useState("Raj Nagar");
  
  const [data,setData]=useState({
    number:1,
    isImage:true
  });

  return (
    <div>
        <button onClick={()=>setName("Akash Nagar")}>Change</button>
        <h1>Hi my name is : {name}</h1>
        
        <hr />

        <button onClick={()=>setData({...data,number:data.number+1})}>+</button>
        <h1>{data.number}</h1>
        <button onClick={()=>setData({...data,number:data.number-1})}>-</button>

        <hr />
        <br />
        <button onClick={()=>setData({...data,isImage:false})}>Hide</button>
        <button onClick={()=>setData({...data,isImage:true})}>Show</button>
        <button onClick={()=>setData({...data,isImage:!data.isImage})}>Toggle</button>
        {
            data.isImage ? <Img_state/> : null
        }

        <br />
        <br />
        <br />
    </div>
  )
}

export default State_func