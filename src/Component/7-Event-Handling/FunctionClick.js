import React from 'react'

function FunctionClick() {
    function clickHandler(){
        // console.log("Functional component Button Clicked")
        document.getElementById('myid').innerHTML="Functional component Button Clicked";
    }
  return (
    <div>
        <button onClick={clickHandler}>Click Me</button>
        <div id='myid'></div>
    </div>
  )
}

export default FunctionClick