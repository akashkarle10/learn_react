import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count :0
      }
    }
    increment(){
        // this.setState({
        //     count:this.state.count+1
        // },()=>{console.log(this.state.count)})

        this.setState((prevState)=>({
            count:prevState.count+1
        }))
    }

    
  render() {
    return (
      <div>
        <div>Count : {this.state.count}</div>
        <Button onClick={()=>this.increment()} variant="outline-dark">Increment</Button>
      </div>
    )
  }
}

export default Counter