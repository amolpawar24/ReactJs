
export let String = "Hello";

export let Number = 10;

// eslint-disable-next-line react-refresh/only-export-components
export let Obj = {
    name: "Amol",
    age: 24
}

function DefFunction(){
    console.log(Obj);
    return(
        <>
            <h1>String Is : {String}</h1>
            <h1>Number Is: {Number}</h1>
        </>
    )
}

export default DefFunction;