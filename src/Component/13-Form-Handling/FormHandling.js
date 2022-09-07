import React, { Component } from 'react'

export class FormHandling extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           username:''
        }
      }

      chnageHandler=(event)=>{
        this.setState({
            username: event.target.value
        })
      }
  render() {
    return (
      <div>
        <form>
            <div>
                <label>Username : </label>
                <input type={'text'} value={this.state.username} onChange={this.chnageHandler}></input>
            </div>
        </form>
      </div>
    )
  }
}

export default FormHandling