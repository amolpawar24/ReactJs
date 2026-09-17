
export default function ObjectProps(props){
    return(
        <>
            <h3>My Name Is : {props.obj.name} </h3>
            <h3>My Age is : {props.obj.age}</h3>
            <h3>My Email is : {props.obj.email}</h3>
        </>
    )
}