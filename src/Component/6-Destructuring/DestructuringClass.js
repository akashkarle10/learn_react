import React, { Component } from 'react'

export class DestructuringClass extends Component {
  render() {
    const {name, sname}=this.props
    return (
      <div>
        <h1>Hello {name} {sname} - Class Component Destructuring</h1>
      </div>
    )
  }
}

export default DestructuringClass