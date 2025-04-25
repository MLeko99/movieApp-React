import React from "react";
import { useState } from "react";

const ToDo = () => {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addTask = () => {
    setTask([...task, input]);
    setInput(""); // Resetira input nakon dodavanja
  };

  const handleDelete = (index) => {
    setTask(task.filter((_, item) => item !== index));
  };

  console.log(task);

  return (
    <>
      <input
        type="text"
        placeholder="Dodaj zadatak"
        value={input}
        onChange={handleChange}
      />
      <button onClick={addTask}>Dodaj zadatak</button>

      {task.map((item, index) => (
        <p key={index}>
          {item} <button onClick={() => handleDelete(index)}>Obriši</button>
        </p>
      ))}
    </>
  );
};

export default ToDo;
