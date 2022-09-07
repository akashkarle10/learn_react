import React, {useState} from 'react'

function LearnUseState() {
    const [data,setData]=useState('Akash')
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={()=>{setData('Karle')}}>Change Name</button>
    </div>
  )
}

export default LearnUseState