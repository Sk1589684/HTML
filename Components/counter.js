import { useState, useEffect } from "react";

function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
export default Count;