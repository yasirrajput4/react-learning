import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      alert("Please enter a value");
      return;
    }

    console.log("Form Submitted by", name);
    setName("");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
