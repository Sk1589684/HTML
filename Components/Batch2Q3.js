import React, { useState } from "react";

function Stud() {
  const [students, setStudents] = useState([
    { id: 1, name: "Sanket", age: 21 },
    { id: 2, name: "Rahul", age: 22 },
    { id: 3, name: "Amit", age: 20 }
  ]);

  // Delete function
  const deleteRow = (id) => {
    const updatedData = students.filter((student) => student.id !== id);
    setStudents(updatedData);
  };

  return (
    <div>
      <h2>Student Table</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>
                <button onClick={() => deleteRow(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Stud;