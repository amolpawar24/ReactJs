/* eslint-disable no-unused-vars */
import Greet, { Welcome } from "./components/ClassComponents/Greet"
import DefaultExport from "./components/FunctionalComponents/DefaultExport"
import { Add, Demo1, Demo2 } from "./components/FunctionalComponents/NamedExport"
import { Fun1, Fun2 } from "./components/MultipleExports/MultipleExports"

function App() {

  return (
    <>
      {/* Class Components */}
        {/* <Greet/> */}
        {/* <Welcome/> */}


      {/* Default Components */}
        {/* <DefaultExport/> */}

        {/* Named Export */}
        {/* <Add a={10} b={20}/> */}
        {/* <Demo1/> */}
        {/* <Demo2/> */}

        {/* Multiple Exports  */}
        <Fun1/>
        <Fun2/>
    </>
  )
}

export default App
