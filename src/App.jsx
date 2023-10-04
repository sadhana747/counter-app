import "./App.css";
import { useState } from "react";

function App() {
  let [value, setValue] = useState(0);

  let increaseValue = () => {
    if (value > 10) {
      alert("value is greater than 50");
    }
    setValue(value + 1);
    console.log("button clicked", setValue);
  };

  let decreaseValue = () => {
    if (value < 0) {
      alert("value is less than 0");
    }
    setValue(value - 1);
    console.log("button clicked", setValue);
  };

  return (
    <>
      <h1>Counter App</h1>
      <p> Current Value:{value} </p>
      <button onClick={increaseValue}>Increase Value </button>
      <br />
      <button onClick={decreaseValue}>Decrease Value </button>
    </>
  );
}

export default App;
