import "./App.css";
import { useState } from "react";

function StateEg() {
  //state will rerender the return() if felt any change

  const [data, stData] = useState("Sahil"); //initial val of data use setData to change val

  return (
    <div className="App">
      <h1>Name is {data}</h1>
      <button onClick={NameChange}>Click Me to change NAME</button>
    </div>
  );

  function NameChange() {
    //here or above return
    if (data === "Sahil") {
      stData("Dussa");
    } else {
      stData("Sahil");
    }
  }
}

export default StateEg;
