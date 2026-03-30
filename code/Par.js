import React, { useState } from "react";
import ChildComponent from "./Child";


function ParentComponent() {
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(5);
  const [result, setResult] = useState(0);
  const[operation,setOperation]=useState("");

  
  const handleOperation = (selectedoperation) => {
    setOperation(selectedoperation);
    let res = 0;

    switch (selectedoperation) 
    {
      case "add":
        res = num1 + num2;
        break;

      case "sub":
        res = num1 - num2;
        break;

      case "mul":
        res = num1 * num2;
        break;

      case "div":
        res = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        break;

    
      default:
        res = 0;
    }

    setResult(res);

  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Parent Component</h2>

      <p>Number 1: {num1}</p>
      <p>Number 2: {num2}</p>

      <ChildComponent onSelectOperation={handleOperation} />

      <h3>Result: {result}</h3>
      
    </div>
  );
}

export default ParentComponent;


