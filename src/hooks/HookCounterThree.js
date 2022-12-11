import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  // const changeFirstName = (event) => {
  //   setName({ ...name, firstName: event.target.value });
  // };

  // const changeLastName = (event) => {
  //   setName({ ...name, lastName: event.target.value });
  // };

  const changeName = (event) => {
    setName({ ...name, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div>
        <label>First Name</label>
        <input
          type="text"
          value={name.firstName}
          onChange={changeName}
          name="firstName"
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={name.lastName}
          onChange={changeName}
          name="lastName"
        />
      </div>
      <div>First Name is {name.firstName}</div>
      <div>Last Name is {name.lastName}</div>
      <h1>{JSON.stringify(name)}</h1>
    </div>
  );
}

export default HookCounterThree;
