import React from 'react'
import './Style.css'
function Stylesheet(props) {
  const className=props.isPrimary ? 'colour':''
  return (
    <div>
        <h1 className={className}>Hello Akash</h1>
        <h1 className='error'>Simple CSS class</h1>
        <h1 className='success'>Simple CSS class</h1>
    </div>
  )
}

export default Stylesheet