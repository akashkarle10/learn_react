import React from 'react'

function PersonDetails({personDetails}) {
  return (
    <div>
        <h2>I am {personDetails.name}. I am {personDetails.age} years old. I know {personDetails.skill}. </h2>
    </div>
  )
}

export default PersonDetails