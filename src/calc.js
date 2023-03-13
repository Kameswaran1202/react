import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  function handleClick(event) {
    const value = event.target.value;
    setInput(input + value);
  }

  function calculate() {
    setInput(eval(input));
  }

  function clear() {
    setInput("");
  }

  return (
    <div>
      <input type="text" value={input} />
      <br />
      <button onClick={handleClick} value="7">
        7
      </button>
      <button onClick={handleClick} value="8">
        8
      </button>
      <button onClick={handleClick} value="9">
        9
      </button>
      <button onClick={handleClick} value="/">
        ÷
      </button>
      <br />
      <button onClick={handleClick} value="4">
        4
      </button>
      <button onClick={handleClick} value="5">
        5
      </button>
      <button onClick={handleClick} value="6">
        6
      </button>
      <button onClick={handleClick} value="*">
        ×
      </button>
      <br />
      <button onClick={handleClick} value="1">
        1
      </button>
      <button onClick={handleClick} value="2">
        2
      </button>
      <button onClick={handleClick} value="3">
        3
      </button>
      <button onClick={handleClick} value="-">
        -
      </button>
      <br />
      <button onClick={handleClick} value="0">
        0
      </button>
      <button onClick={handleClick} value=".">
        .
      </button>
      <button onClick={calculate}>=</button>
      <button onClick={handleClick} value="+">
        +
      </button>
      <br />
      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default Calculator;
