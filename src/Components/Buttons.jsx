// HOOK'S
import { useState } from "react";
import * as math from "mathjs";

const Buttons = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleOperation = (event) => {
    const value = event.target.value;
    setInput(input + value)
  };
  
  const handleCalculate = () => {
    try {
      const calculatorResult = math.evaluate(input);
      setResult(calculatorResult);
    } catch (error) {
      setResult(`Error`);
    }
  };
  
  console.log("r=" + result);
  console.log("i="+ input);
  return (
    <div className="operations">
      <div>{
        result.length===0 ? <p></p> : <p>{result}</p>
      }</div>

      <div>
        <button id="clear" value="AC" onClick={()=> {setInput(""); setResult("")}}>AC</button>
        <button id="divide" value="/" onClick={handleOperation}>/</button>
        <button id="multiply" value="*" onClick={handleOperation}>*</button>
      </div>

      <div>
        <button id="seven" value="7" onClick={handleOperation}>7</button>
        <button id="eight" value="8" onClick={handleOperation}>8</button>
        <button id="nine" value="9" onClick={handleOperation}>9</button>
        <button id="subtract" value="-" onClick={handleOperation}>-</button>
      </div>

      <div>
        <button id="four" value="4" onClick={handleOperation}>4</button>
        <button id="five" value="5" onClick={handleOperation}>5</button>
        <button id="six" value="6" onClick={handleOperation}>6</button>
        <button id="add" value="+" onClick={handleOperation}>+</button>
      </div>

      <div>
        <button id="one" value="1" onClick={handleOperation}>1</button>
        <button id="two" value="2" onClick={handleOperation}>2</button>
        <button id="three" value="3" onClick={handleOperation}>3</button>
        <button id="equals" value="=" onClick={handleCalculate}>=</button>
      </div>

      <div>
        <button id="zero" value="0" onClick={handleOperation}>0</button>
        <button id="decimal" value="." onClick={handleOperation}>.</button>
      </div>
    </div>
  );
};

export default Buttons;
