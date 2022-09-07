import React, { PureComponent } from 'react'

export class ReactPureComponents extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         count:1
      }
    }
    couterIncrease(){
        this.setState(()=>({
        count:1
    }))
    }
  render() {
    console.log('Counter updated')
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.couterIncrease()}>Pure Component Counter</button>
      </div>
    )
  }
}

export default ReactPureComponents