import React,{useEffect,useState} from 'react'
import PropsLearnEffect from './PropsUseEffect'
function LearnUseEffect2() {
    const [count,setCount]=useState(0)
    const [data,setData]=useState(10)

    useEffect(()=>{
        console.log('useEffect Call on Count....')
    },[count])
  return (
    
    <div>
        <PropsLearnEffect data={1000} name='Akash'></PropsLearnEffect>
        <h2>{count}</h2>
        <button onClick={()=>{setCount(count+1)}}>Count ++</button>

        <h2>{data}</h2>
        <button onClick={()=>{setData(data+10)}}>Change Data</button>
    </div>
  )
}

export default LearnUseEffect2