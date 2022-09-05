import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    render() {
    // First Method 
        if (this.state.isLoggedIn) {
            return (
                <h1>Hello Akash</h1>
            )
        }
        else{
            return (
                <h1>Hello Guest</h1>
            )
        }

    // Second 
        let message
        if(this.state.isLoggedIn){
            message="Hello Akash"
        }
        else{
            message="Hello Guest"
        }
        return(<h1>{message}</h1>)

    // Third
        return this.state.isLoggedIn ?(
        <h1>Hello Akash</h1>
        ):(
        <h1>Hello Guest</h1>
        )

    // Fourth
        return this.state.isLoggedIn && <h1>Hello Akash</h1>
    }

}

export default ConditionalRendering