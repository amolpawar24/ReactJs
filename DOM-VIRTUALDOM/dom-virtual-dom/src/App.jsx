function App() {
  return (
    <>
      <h1>DOM vs VIRTUAL DOM</h1>
    </>
  );
}

const realDOM = document.createElement("h1");
realDOM.textContent = "This is Real DOM Element";

const virtualDom = <h1>This is Virtual DOM Element</h1>;

console.log("virtualDom", virtualDom);
console.dir("realDOM", realDOM);
export default App;
