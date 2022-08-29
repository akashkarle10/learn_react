import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Clcik Below button To Subscribe'
        }

        //Third Method to Bind the event in constructor
        this.handler = this.handler.bind(this)
    }

    // handler(){
    //     this.setState({
    //         message:'Thanks For Subscribing'
    //     })
    // }

    // Fourth Method to bind event
    handler = () => {
        this.setState({
            message: 'Thanks For Subscribing'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* First Method to Bind event */}
                {/* <button onClick={this.handler.bind(this)}>Subscribe</button> */}

                {/* Second Method to bind event */}
                {/* <button onClick={()=>this.handler()}>Subscribe</button> */}

                <button onClick={this.handler}>Subscribe</button>

            </div>
        )
    }
}

export default EventBind