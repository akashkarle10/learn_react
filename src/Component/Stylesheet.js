import React from 'react'
import './Style.css'
function Stylesheet(props) {
  const className=props.isPrimary ? 'colour':''
  return (
    <div>
        <h1 className={className}>Hello Akash</h1>
    </div>
  )
}

export default Stylesheet