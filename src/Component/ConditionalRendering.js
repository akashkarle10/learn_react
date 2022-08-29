import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
  render() {
    // First Method 
        // if (this.state.isLoggedIn) {
        //     return (
        //         <h1>Hello Akash</h1>
        //     )
        // }
        // else{
        //     return (
        //         <h1>Hello Guest</h1>
        //     )
        // }

    // Second 
    let message
    if(this.state.isLoggedIn){
        message="Hello Akash"
    }
    else{
        message="Hello Guest"
    }
    return(<h1>{message}</h1>)
  }
  
}

export default ConditionalRendering