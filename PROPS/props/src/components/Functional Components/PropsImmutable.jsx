
export default function PropsImmutable(props){
    console.log("props");
    //! Props are Immutable if you trying initaialize new value then it will error
//    props.name = "Ganesh"; //? error : Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'

    return(
        <>
            <h3>props.name = {props.name}</h3>
        </>
    )
    
}