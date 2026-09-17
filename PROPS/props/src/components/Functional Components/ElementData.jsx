function ElementData(props) {
  console.log(props);

  // props-destrcuturing
  let { demo, obj, arr } = props;

  return (
    <>
      <h2>The addtion is {demo(5, 7)}</h2>
      <ul>
        <li>My Name is {obj?.name} </li>
        <li>My Age is {obj?.age}</li>
        <li> My Emailis {obj?.email}</li>
      </ul>
      <h2>
         The arr is {arr} <br />
         Well formatted array {arr?.join(", ")}
      </h2>
    </>
  );
}

export default ElementData;
