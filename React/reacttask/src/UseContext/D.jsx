import React, { useContext } from 'react'
import { UserContext } from './Use_context'

function D() {
 
  const {name,setName}=useContext(UserContext);
  return (
    <div>
       <button onClick={()=>setName('Raj Nagar D')} >Change D</button>
       <h1>Hi i am D Component : {name}</h1>
    </div>
  )
}

export default D