import { Component } from "react"



export let Navbar = () =>{
    return(
        <div className="Nav">
            <ul>
                <li><a href="https://www.youtube.com/">Home</a></li>
                <li><a href="https://www.youtube.com/">Contact</a></li>
                <li><a href="https://www.youtube.com/">Help</a></li>
            </ul>
        </div>
    )
}

export class Profile extends Component{
    render(){
        return(
            <div className="Profile">
                <button>Watch</button>
            </div>
        )
    }
}