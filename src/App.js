import logo from "./logo.svg";
import Users from "./Users";
import "./App.css";
import PropEg from "./PropEg";

function App() {
  let name = "Peter";
  function Apple() {
    name = "Sahil";
    alert("clicked");
  }

  return (
    <div className="App">
      <h1>Here {2 * 2}</h1>
      <Users />
      <button onClick={Apple}>Click me</button>
      <button onClick={() => alert("hello")}>Click me</button>
      <button
        onClick={function () {
          alert("hello");
        }}
      >
        Click me
      </button>
      <PropEg />
      <h3>{name}</h3>
    </div>
  );
}

export default App;
