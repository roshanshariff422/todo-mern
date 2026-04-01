import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  // Fetch tasks
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/tasks");
    setTasks(res.data);
  };

  // Add task
  const addTask = async () => {
    if (!title) return;

    await axios.post("http://localhost:5000/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>To-Do App</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;