import "./styles.css";
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("")
  const [result, setResult] = useState(0)

  function handleInputChange(event) {
    setInputValue(event.target.value)
  }

  function handleInput() {
    const sanitizedInput = String(inputValue).replace('.', '')
    const inputNumber = Number(sanitizedInput)
    const reverseNumber = Number(sanitizedInput.split('').reverse().join(''))
    setResult(Math.abs(inputNumber - reverseNumber))
  }

  return (
    <div className="App">
      <div>
        Number:
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleInput}>Submit</button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
}
