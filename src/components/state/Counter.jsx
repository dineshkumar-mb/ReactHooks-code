import React, { useEffect, useState } from 'react'

function Counter() {
  const [count,setCount]=useState(0);
  const handleincrement=()=>{
    setCount(count+1);
  }
  const handledecrement=()=>{
    setCount(count-1);
  }
  const handlereset=()=>{
    setCount(0);
  }
  useEffect(()=>{
    console.log("component mounted");
    
  },[]);
  return (
    <>
    <h1>Counter-useEffect:{count}</h1>
    <button onClick={handleincrement}>+++</button>
    <button onClick={handledecrement}>---</button>
    <button onClick={handlereset}>000</button>
    </>
  )
}

export default Counter