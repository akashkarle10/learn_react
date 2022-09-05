import React from 'react'

const style={
    fontSize:'72px',
    color:'white',
    backgroundColor:'gray',
    padding:'20px'
}
function InlineStyle() {
  return (
    <div>
        <h1 style={style}>Hello React</h1>
        <h1 className='error'>Error</h1>
    </div>
  )
}

export default InlineStyle