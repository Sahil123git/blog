import { useState } from "react";

function PropEgStudent(prop) {
  //state will rerender the return() if felt any change

  console.log(prop.name);
  return (
    <div>
      <h1>
        Hello {prop.name} ur email is {prop.email} and other data is
        {prop.other.address} and rest is {prop.other.mobile}
      </h1>
    </div>
  );
}

export default PropEgStudent;
