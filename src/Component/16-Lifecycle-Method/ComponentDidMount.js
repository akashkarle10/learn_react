import React, { Component } from 'react'

export class ComponentDidMount extends Component {

    constructor(props) {
      super(props)
    
      console.log('Constructor')
    }
    componentDidMount(){
        console.log('ComponentDidMount')
        
    }
  render() {
    console.log('Render')
    return (
      <div>
        ComponentDidMount
      </div>
    )
  }
}

export default ComponentDidMount