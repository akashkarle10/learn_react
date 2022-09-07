import React, { Component } from 'react'

export class Constructor extends Component {
    constructor() {
      super()
        console.log('Constructor ')
    }
  render() {
    console.log('Render Method ')
    return (
      <div>Constructor</div>
    )
  }
}

export default Constructor