import React, { Component } from 'react'

class ComponentDidUpdate extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Akash"
      }
    }
    componentDidUpdate(){
        console.log('Updated')
    }
    shouldComponentUpdate(){
        return true
    }
  render() {
    console.log('rendered')
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={()=>{this.setState({name:'Karle'})}}>Click Me</button>
      </div>
    )
  }
}

export default ComponentDidUpdate