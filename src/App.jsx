// TODO: Handle user input fields
// TODO: Handle Buttons Or Operations
// TODO: Handle a list of histories
// TODO Render History list
// TODO Restore the history

import React, { useState } from "react";

const InitialInputState = {
  a: 0,
  b: 0,
};

const App = () => {
  const [inputState, setInputState] = useState({ ...InitialInputState });

  const handleInputField = (event) => {
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container">
      <div>
        <h1>Result : 0</h1>
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
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>%</button>
        <button>Clear</button>
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
