import React,{Component} from "react";
import Button from 'react-bootstrap/Button';
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
                <Button onClick={()=>this.changeMessage()}>Suscribe</Button>
            </div>
        )
    }
}
export default State;