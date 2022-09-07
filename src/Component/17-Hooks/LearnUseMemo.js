import React, {useState, useMemo} from 'react'

function LearnUseMemo() {
    const [count,setCount]=useState(0)
    const [data,setData]=useState(10)

    const memoMultiCount = useMemo(function multiCount(){
        console.log('multiCount call...')
        return count*5
    },[count])
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}>Counter</button>
        <h2>{memoMultiCount}</h2>
        <h2>{data}</h2>
        <button onClick={()=>setData(data+10)}>Data Counter</button>
    </div>
  )
}

export default LearnUseMemo