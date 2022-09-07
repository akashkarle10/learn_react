import React,{useState, useEffect} from 'react'

function PropsUseEffect(props) {
    const [count,setCount]=useState(props.data)
    const [data,setData]=useState(props.name)

    useEffect(()=>{
        console.log('useEffect called on Props')
    },[count])
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=>{setCount(count+1)}}>Props Count ++</button>
        <h2>{data}</h2>
        <button onClick={()=>{setCount(data+1)}}>Props Data ++</button>
    </div>
  )
}

export default PropsUseEffect