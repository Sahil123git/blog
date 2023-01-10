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
    </div>
  );
}

export default Users;
