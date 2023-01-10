import "./App.css";
import { useState } from "react";
import PropEgStudent from "./PropEgStudent";

function PropEg() {
  //state will rerender the return() if felt any change

  const [data, stData] = useState("Sahil"); //initial val of data use setData to change val

  function NameChange() {}

  return (
    <div className="App">
      <h1>Name is {data}</h1>
      <PropEgStudent
        name="Student"
        email={"sahil@gmail.com"}
        other={{ address: "Jammu", mobile: "01012" }} //sending this data as
      />
    </div>
  );
}

export default PropEg;
