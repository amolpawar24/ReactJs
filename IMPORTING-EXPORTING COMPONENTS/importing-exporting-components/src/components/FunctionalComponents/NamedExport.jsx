
export function Add({a, b}){
    console.log(a, b)
    return <h2>The Sum is: {a+b}</h2>
}

export const Demo1 = () =>{
    return(
        <h2>Demo Component 1</h2>
    )
}

export const Demo2 = () =>{
    return <h2>Demo Component 2</h2>
}