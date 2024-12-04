
import React, { useRef, useState } from 'react'

function CounteruseRef() {
  const [state,setState]=useState(0);
  const handlestateinc=()=>{
    setState(state+1);
  }

  const countRef =useRef(0);
const handleRefinc=()=>{
  countRef.current+=1;
  console.log(countRef.current);
   
}
console.log('component rendered');
  return (
   <>
   <h1>StateCount:{state}</h1>
   <h1>RefCount:{countRef.current}</h1>
   <button onClick={handleRefinc}>handleRefinc</button>
   <button onClick={handlestateinc}>handlestateinc</button>
   </>
  )
}

export default CounteruseRef;