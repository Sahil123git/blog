import "./App.css";

function Users() {
  //function component
  function Apple() {
    //nested component
    return <h3>Nested Component</h3>;
  }
  return (
    <div className="App">
      <h1>Hey There from new file</h1>
      <Apple />
      {Apple()}
      <h1>Hey There from new file</h1>
    </div>
  );
}

export default Users;
