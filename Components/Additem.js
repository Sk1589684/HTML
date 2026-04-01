import { useEffect, useState } from "react";

function Items() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (item !== "") {
      setList([...list, item]);
      setItem("");
    }
  };

  useEffect(() => {
    console.log("hello");
  }, [])

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Item List</h2>

      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter item"
      />

      <button onClick={addItem}>Add</button>

      <div>
        <ol>
          {list.map((val, index) => (
            <li key={index}>{val}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Items;