import { Component } from "react";


export default class StudentClass extends Component{
    //! You should pass props to constructor only if you need to use props inside the constructor.
    //* super(props) : It call the Parent class constructor and pass props to the Parent class constructor
    constructor(props){
        super(props);
        console.log("props : ",props);
        
    }
    //! If you want to Access the props in the return() then we have to use this.props.name
    render(){
        return(
            <>
                <h3>My Name Is : {this.props.name}</h3>
                {console.log("this.props.name : ",this.props.name)}
                <p>{this.props.children}</p>
            </>
        )
    }
}