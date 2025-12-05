import { useState } from "react";


// function myfun(a){
//     var a=20;
//     console.log(a);
// }




function Mycompo()
{
    const [name,setname]=useState(1);
    return(
        <>
        <h1>Hello intial value : {name}</h1>
        <button onClick={()=>setname(name+1)}>Increase</button>
        <button onClick={()=>setname(name-1)}>Decrease</button>
        
        </>
    )
    
    
}


export default Mycompo;