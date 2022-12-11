import React from "react";
import useInput from "./useInput";

function CustomUseInput1() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetlastName] = useInput("");
  const submitHandler = (event) => {
    event.preventDefault();
    alert(`${firstName}-${lastName}`);
    resetFirstName();
    resetlastName();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" {...bindLastName} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CustomUseInput1;
