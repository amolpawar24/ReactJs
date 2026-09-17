
export default function Task(props){
    console.log("🚀 ~ Task ~ props:", props)
    return(
        <h4>{props.name} || {props.age} || {props.retiredate}</h4>
    )
}