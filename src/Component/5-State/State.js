import React,{Component} from "react";
class State extends Component{
    constructor(){
        super()
        this.state={
            message:'Welcome'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thanks For Subscribing'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Suscribe</button>
            </div>
        )
    }
}
export default State;