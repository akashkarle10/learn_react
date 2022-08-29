import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("Functional component Button Clicked")
    }
  return (
    <div>
        <button onClick={clickHandler}>Click Me</button>
    </div>
  )
}

export default FunctionClick