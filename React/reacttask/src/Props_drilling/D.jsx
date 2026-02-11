import React from 'react'

function D({name,number,setName}) {
  return (
    <div>
      <button onClick={()=>setName("Pinal Nagar")}>Change D</button>
        <h1>Hi i am D Component : {name}</h1>
    </div>
  )
}

export default D