import { Component } from "react";


export default class Greet extends Component{
    render(){
        return(
            <>
            {/* Mandatory to use this keyword to accessing the props */}
                <h1>Hello {this.props.name}</h1>
            </>
        )
    }
}