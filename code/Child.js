import React, { useEffect } from "react";

function ChildComponent({ onSelectOperation }) {
  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  return (
    <div>
      <h3>Select Operation</h3>
      <select onChange={(e) => onSelectOperation(e.target.value)}>
        <option value="">--Select--</option>
        <option value="add">Addition</option>
        <option value="sub">Subtraction</option>
        <option value="mul">Multiplication</option>
        <option value="div">Division</option>
      </select>
    </div>
  );
}

export default ChildComponent;
