import { Component } from "react";

export default class Greet extends Component{
    render(){
        return(
            <div>
                <h1>This is Class Component</h1>
            </div>
        )
    }
}

export class Welcome extends Component{
    render(){
        return(
            <div>
                <h1>This is Another Class Component</h1>
            </div>
        )
    }
}