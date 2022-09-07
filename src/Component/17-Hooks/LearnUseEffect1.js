import React,{useEffect,useState} from 'react'

function LearnUseEffect1() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log('useEffect Call....')
    })
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=>{setCount(count+1)}}>Count ++</button>
    </div>
  )
}

export default LearnUseEffect1