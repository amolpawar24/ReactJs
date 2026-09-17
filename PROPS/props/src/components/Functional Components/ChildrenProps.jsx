export default function ChildrenProps(props){
    return(
        <>
            <div><h1>My Name Is : {props.name}</h1>
                {props.children}
            </div>
        </>
    )
}