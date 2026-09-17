
export default function FunctionProps(props){
    //This is how we can call function from props and store the return value in a variable and use it in JSX
    let var1 = props?.Fun(3, 5) 
    return(
        <>
            <h3>Function Value is : {var1}</h3>
        </>
    )
}