
function Student(props) {
    console.log("Stundent props : ",props)
    return(
        <>
            <h3>Name : {props.name}</h3>
            <h5>Email : {props.email}</h5>
            {/* Rendering the Children Props*/}
            {props.children}    
        </>
    )
}

export default Student;