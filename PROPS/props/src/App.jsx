/* eslint-disable no-unused-vars */

import Greet from "./components/Class Components/Greet";
import StudentClass from "./components/Class Components/StudentClass";
import { Employee } from "./components/data/Array";
import ArrayProps from "./components/Functional Components/ArrayProps";
import Card from "./components/Functional Components/Card";
import CardDemo from "./components/Functional Components/CardDemo";
import Img1 from "./assets/images/Goku.jpg"
import Img2 from "./assets/images/apple-watch.png"
import ChildrenProps from "./components/Functional Components/ChildrenProps";
import ElementData from "./components/Functional Components/ElementData";
import FunctionProps from "./components/Functional Components/FunctionProps";
import List from "./components/Functional Components/List";
import ObjectProps from "./components/Functional Components/ObjectProps";
import Props from "./components/Functional Components/Props";
import PropsImmutable from "./components/Functional Components/PropsImmutable";
import StringProps from "./components/Functional Components/StringProps";
import Student from "./components/Functional Components/Student";
import Task from "./components/Functional Components/Task";
import ValueProps from "./components/Functional Components/ValueProps";

function App() {
  //? 1. Passing Function as Props

  let demo = function functionDemo(a, b) {
    return a + b;
  };

  //? 2.Passing Object as Props
  let a = {
    name: "Amol Pawar",
    age: 25,
    email: "24amolpawar@gmail.com",
  };

  let arr = [100, 200, 300, 400, 500];

  return (
    <>
      <h1>PROPS</h1>

      {/* 1.Pases the Props in the Functional Component */}
      {/* We need to pass the attributes */}
      {/* <ElementData demo={demo} obj={a} arr={arr}/> */}

      {/* <Student name="Amol Pawar" email="24amolpawar@gmail.com"/> */}
      {/* 2.Props makes the Component Reusable */}
      {/* <Student name="Ganesh Gidde" email="giddeganesh47@gmail.com"/>
      <Student name ="Ashutosh Naikwadi" email="ashutoshnaikwadi@gmail.com"/> */}

      {/* 3.Props Children */}
      {/* A.In Class Component  */}
      {/* <StudentClass name="John Doe" email="john.deo@example.com">
        <p>This is a child element passed as children props</p>
      </StudentClass> */}
      {/* B.In Functional Component */}
      {/* <ChildrenProps name="Amol">
        <p>This is Children props Demo</p>
      </ChildrenProps> */}

      {/* 4.List Component to demostarte the props.children */}
      {/* <List>
        <span>Apple</span>
        <span>Banana</span>
        <span>Grapes</span>
        <span>Mango</span>
      </List> */}

      {/* <Props name="App Component"/> */}

      {/* 5.Mapping the Component  */}
      {/* <div>
        {
          Employee?.map((emp, index)=>{
            return <Task key={index} name={emp.name} age={emp.age} retiredate={emp.retiredate}/>
          })
        }
      </div> */}

      {/* 6.Passing Array Props */}
      {/* <ArrayProps arr={[10, 20, 30, 40, 50]} /> */}

      {/* 7.Object Props */}
      {/* <ObjectProps obj={{name: "Amol Pawar", age: 25, email: "24amolpawar@gmail.com"}} /> */}

      {/* 8.Injecting Props into component */}
      {/* <Card one="ONE" two="TWO" three={arr}/>
      <Card one="ONE" />
      <Card one="ONE" demo={demo} a={a}/> */}

      
      {/* 9.Injectin Image as Props into the Component */}
      {/* {/* <CardDemo one= "ONE" two={{a}} three ={{arr}} four="Log IN" five={Img1} /> */}
      {/* <CardDemo one= "FUN" four="Log Out" five={Img2} /> */}


      {/* 10.Props Immutable */}
      {/* <PropsImmutable name="Amol Pawar" /> */}
      {/* <StringProps name="Amol Pawar" />  */}
      {/* <ValueProps age={25} /> */}

      
      {/* 11.Passing Function As Props  */}
      {/* <FunctionProps Fun={demo}/> */}

      {/* 12.Class Component */}
      {/* Props  mamkes the component reusable  */}
      {/* <Greet name="Amol"/> */}
      {/* <Greet name="Ganesh"/> */}
      {/* <Greet name="Ashutosh"/> */}
      {/* <StudentClass name="Amol Pawar" /> */}

    </>
  );
}

export default App;
