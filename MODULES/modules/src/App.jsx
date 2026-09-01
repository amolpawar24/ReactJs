import ArrayExport from "./components/ArrayExport"
import { ArrowFun1, ArrowFun2, ArrowFun3, ArrowFun4 } from "./components/ArrowFunction"
import { Fun1, Fun2, Fun3, Fun4 } from "./components/ExportAll"
import DefFunction from "./components/Exports"

function App() {

  return (
    <>
      {/* Array Export */}
      <ArrayExport />

      {/* Arrow Functions */}
      <ArrowFun1/>
      <ArrowFun2/>
      <ArrowFun3/>
      <ArrowFun3/>
      <ArrowFun4/>

      {/* Export All */}
      <Fun1/>
      <Fun2/>
      <Fun3/>
      <Fun4/>

      <DefFunction/>
    </>
  )
}

export default App
