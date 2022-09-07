import React from 'react'
import './style.css'
import style from './style.module.css'
function ReactStyle() {
  return (
    <div>
        <h1 style={{backgroundColor:'black',color:'gold'}}>Inline Style</h1>
        <h1>Internal Style</h1>
        <h1 className='myclass'>External Stylesheet</h1>
        <h1 className={style.myModuleClass}>Module Stylesheet</h1>
    </div>
  )
}

export default ReactStyle