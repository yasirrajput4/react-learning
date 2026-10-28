import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:5000/students")
        .then((res) => res.json())
        .then((data) => setStudents(data));
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  }, []);

  return (
    <>
      <h1>Total Students: {students.length}</h1>

      {students.map((student) => (
        <div key={student.id}>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <p>City: {student.city}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default App;
