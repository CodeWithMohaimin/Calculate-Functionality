// Done: Handle user input fields
// doNE: Handle Buttons Or Operations
// TODO: Handle a list of histories
// TODO Render History list
// TODO Restore the history

import React, { useState } from "react";

//input initial value
const InitialInputState = {
  a: 0,
  b: 0,
};

const App = () => {
  const [inputState, setInputState] = useState({ ...InitialInputState });
  const [result, setResult] = useState(0);

  //handle input section
  const handleInputField = (event) => {
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  };

  // Clear Function
  const clear = () => {
    setInputState({ ...InitialInputState });
  };

  // Arithmetic Calculations
  const handleCalculations = (operation) => {
    const f = new Function(
      "operation",

      `
    return ${inputState.a} ${operation} ${inputState.b}
    `
    );
    setResult(f(operation));
  };

  return (
    <div className="container">
      <div>
        <h1>Result : {result}</h1>
      </div>
      <div>
        <p>Inputs</p>
        <input
          type="number"
          name="a"
          onChange={handleInputField}
          value={inputState.a}
        />
        <input
          type="number"
          name="b"
          onChange={handleInputField}
          value={inputState.b}
        />
      </div>
      <div>
        <p>Operations</p>
        <button onClick={() => handleCalculations("+")}>+</button>
        <button onClick={() => handleCalculations("-")}>-</button>
        <button onClick={() => handleCalculations("*")}>*</button>
        <button onClick={() => handleCalculations("/")}>/</button>
        <button onClick={() => handleCalculations("%")}>%</button>
        <button onClick={clear}>Clear</button>
      </div>
      <div>
        <p>History</p>
        <p>
          <small>There is no history</small>
        </p>
      </div>
    </div>
  );
};

export default App;
