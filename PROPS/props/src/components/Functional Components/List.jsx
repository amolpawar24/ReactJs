
export default function List(props){
    return(
        <>
            <h3>List As a Props as Children</h3>
            <ul>
                {
                    props?.children?.map((item, index) =>{
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </>
    )
}